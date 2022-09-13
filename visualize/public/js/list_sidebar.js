// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt
frappe.provide("frappe.views");

// Custom List Sidebar
frappe.views.ListSidebar = class ListSidebar {
	constructor(opts) {
		$.extend(this, opts);
		this.pathname = window.location.pathname.split("/")[2];
		this.prepare_container();
		this.setup_menus();
	}

	async prepare_container() {
		let list_sidebar = $(`
			<div class="list-sidebar overlay-sidebar hidden-xs hidden-sm">
				<div class="desk-sidebar list-unstyled sidebar-menu"></div>
			</div>
		`).appendTo(this.page.sidebar.empty());
		this.sidebar = list_sidebar.find(".desk-sidebar");
	}

	get_pages_menu(workspace) {
		return frappe.xcall("visualize.overrides.desktop.get_sidebar_items", {
			workspace_name: workspace ? workspace : "Home"
		});
	}

	async setup_menus() {
		let data = await this.get_pages_menu(this.pathname);
		this.menuData = data.pages;
		this.make_sidebar(data.pages);
	}

	make_sidebar(all_menu) {
		if (this.sidebar.find(".standard-sidebar-section")[0]) {
			this.sidebar.find(".standard-sidebar-section").remove();
		}

		let parent_menu = all_menu.filter((page) => page.parent_menu === 0);

		parent_menu.forEach((parent) => {
			let root_pages = all_menu.filter((page) => page.parent_menu === parent.idx);
			this.build_sidebar_section(parent.label, root_pages);
		});

		// Scroll sidebar to selected page if it is not in viewport.
		this.sidebar.find(".selected").length &&
			!frappe.dom.is_element_in_viewport(this.sidebar.find(".selected")) &&
			this.sidebar.find(".selected")[0].scrollIntoView();

		this.remove_sidebar_skeleton();
	}

	remove_sidebar_skeleton() {
		$(".desk-sidebar").removeClass("hidden");
		$(".list-sidebar").find(".workspace-sidebar-skeleton").remove();
	}

	append_item(item, container) {
		let is_current_page = frappe.router.slug(item.link_to) == window.location.pathname.split("/")[3];
		item.selected = is_current_page;
		if (is_current_page) {
			this.current_page = { name: item.label, public: item.public };
		}

		let $item_container = this.sidebar_item_container(item);
		let pages = item.public ? this.menuData : this.private_pages_menu;

		let child_items = pages.filter((page) => page.parent_menu == item.label);
		if (child_items.length > 0) {
			let child_container = $item_container.find(".sidebar-child-item");
			child_container.addClass("hidden");
			this.prepare_sidebar(child_items, child_container, $item_container);
		}

		$item_container.appendTo(container);

		if ($item_container.parent().hasClass("hidden") && is_current_page) {
			$item_container.parent().toggleClass("hidden");
		}
	}

	prepare_sidebar(items, child_container, item_container) {
		items.forEach((item) => this.append_item(item, child_container));
		child_container.appendTo(item_container);
	}

	sidebar_item_container(item) {
		return $(`
			<div class="sidebar-item-container" item-parent="${item.parent_menu}" item-name="${item.label}" item-public="${item.public || 0}">
				<div class="desk-sidebar-item standard-sidebar-item ${item.selected ? "selected" : ""}">
					<a
						href="/app/${frappe.router.slug(item.workspace_name)}/${frappe.router.slug(item.link_to)}"
						class="item-anchor block-click"}" title="${__(item.label)}"
					>
						<span class="sidebar-item-icon" item-icon=${item.icon || "folder-normal"}>${frappe.utils.icon(item.icon || "folder-normal","md")}</span>
						<span class="sidebar-item-label">${__(item.label)}<span>
					</a>
					<div class="sidebar-item-control"></div>
				</div>
				<div class="sidebar-child-item nested-container"></div>
			</div>
		`);
	}

	build_sidebar_section(title, root_pages) {
		let sidebar_section = $(
			`<div class="standard-sidebar-section nested-container" data-title="${title}"></div>`
		);

		let $title = $(`<div class="standard-sidebar-label parent_sidebar">
			<span>${frappe.utils.icon("small-down", "xs")}</span>
			<span class="section-title">${__(title)}<span>
		</div>`).appendTo(sidebar_section);
		this.prepare_sidebar(root_pages, sidebar_section, this.sidebar);

		$title.on("click", (e) => {
			let icon =
				$(e.target).find("span use").attr("href") === "#icon-small-down"
					? "#icon-right"
					: "#icon-small-down";
			$(e.target).find("span use").attr("href", icon);
			$(e.target).parent().find(".sidebar-item-container").toggleClass("hidden");
		});

		if (Object.keys(root_pages).length === 0) {
			sidebar_section.addClass("hidden");
		}
	}

	setup_views() {
		var show_list_link = false;

		if (frappe.views.calendar[this.doctype]) {
			this.sidebar.find('.list-link[data-view="Calendar"]').removeClass("hide");
			this.sidebar.find('.list-link[data-view="Gantt"]').removeClass("hide");
			show_list_link = true;
		}
		//show link for kanban view
		this.sidebar.find('.list-link[data-view="Kanban"]').removeClass("hide");
		if (this.doctype === "Communication" && frappe.boot.email_accounts.length) {
			this.sidebar.find('.list-link[data-view="Inbox"]').removeClass("hide");
			show_list_link = true;
		}

		if (frappe.treeview_settings[this.doctype] || frappe.get_meta(this.doctype).is_tree) {
			this.sidebar.find(".tree-link").removeClass("hide");
		}

		this.current_view = "List";
		var route = frappe.get_route();
		if (route.length > 2 && frappe.views.view_modes.includes(route[2])) {
			this.current_view = route[2];

			if (this.current_view === "Kanban") {
				this.kanban_board = route[3];
			} else if (this.current_view === "Inbox") {
				this.email_account = route[3];
			}
		}

		// disable link for current view
		this.sidebar
			.find('.list-link[data-view="' + this.current_view + '"] a')
			.attr("disabled", "disabled")
			.addClass("disabled");

		//enable link for Kanban view
		this.sidebar
			.find('.list-link[data-view="Kanban"] a, .list-link[data-view="Inbox"] a')
			.attr("disabled", null)
			.removeClass("disabled");

		// show image link if image_view
		if (this.list_view.meta.image_field) {
			this.sidebar.find('.list-link[data-view="Image"]').removeClass("hide");
			show_list_link = true;
		}

		if (
			this.list_view.settings.get_coords_method ||
			(this.list_view.meta.fields.find((i) => i.fieldname === "latitude") &&
				this.list_view.meta.fields.find((i) => i.fieldname === "longitude")) ||
			this.list_view.meta.fields.find(
				(i) => i.fieldname === "location" && i.fieldtype == "Geolocation"
			)
		) {
			this.sidebar.find('.list-link[data-view="Map"]').removeClass("hide");
			show_list_link = true;
		}

		if (show_list_link) {
			this.sidebar.find('.list-link[data-view="List"]').removeClass("hide");
		}
	}

	setup_reports() {
		// add reports linked to this doctype to the dropdown
		var me = this;
		var added = [];
		var dropdown = this.page.sidebar.find(".reports-dropdown");
		var divider = false;

		var add_reports = function (reports) {
			$.each(reports, function (name, r) {
				if (!r.ref_doctype || r.ref_doctype == me.doctype) {
					var report_type =
						r.report_type === "Report Builder"
							? `List/${r.ref_doctype}/Report`
							: "query-report";

					var route = r.route || report_type + "/" + (r.title || r.name);

					if (added.indexOf(route) === -1) {
						// don't repeat
						added.push(route);

						if (!divider) {
							me.get_divider().appendTo(dropdown);
							divider = true;
						}

						$(
							'<li><a href="#' + route + '">' + __(r.title || r.name) + "</a></li>"
						).appendTo(dropdown);
					}
				}
			});
		};

		// from reference doctype
		if (this.list_view.settings.reports) {
			add_reports(this.list_view.settings.reports);
		}

		// Sort reports alphabetically
		var reports =
			Object.values(frappe.boot.user.all_reports).sort((a, b) =>
				a.title.localeCompare(b.title)
			) || [];

		// from specially tagged reports
		add_reports(reports);
	}

	setup_list_filter() {
		this.list_filter = new ListFilter({
			wrapper: this.page.sidebar.find(".list-filters"),
			doctype: this.doctype,
			list_view: this.list_view,
		});
	}

	setup_kanban_boards() {
		const $dropdown = this.page.sidebar.find(".kanban-dropdown");
		frappe.views.KanbanView.setup_dropdown_in_sidebar(this.doctype, $dropdown);
	}

	setup_keyboard_shortcuts() {
		this.sidebar.find(".list-link > a, .list-link > .btn-group > a").each((i, el) => {
			frappe.ui.keys.get_shortcut_group(this.page).add($(el));
		});
	}

	setup_list_group_by() {
		this.list_group_by = new frappe.views.ListGroupBy({
			doctype: this.doctype,
			sidebar: this,
			list_view: this.list_view,
			page: this.page,
		});
	}

	get_stats() {
		var me = this;
		frappe.call({
			method: "frappe.desk.reportview.get_sidebar_stats",
			type: "GET",
			args: {
				stats: me.stats,
				doctype: me.doctype,
				// wait for list filter area to be generated before getting filters, or fallback to default filters
				filters:
					(me.list_view.filter_area
						? me.list_view.get_filters_for_args()
						: me.default_filters) || [],
			},
			callback: function (r) {
				let stats = (r.message.stats || {})["_user_tags"] || [];
				me.render_stat(stats);
				let stats_dropdown = me.sidebar.find(".list-stats-dropdown");
				frappe.utils.setup_search(stats_dropdown, ".stat-link", ".stat-label");
			},
		});
	}

	render_stat(stats) {
		let args = {
			stats: stats,
			label: __("Tags"),
		};

		let tag_list = $(frappe.render_template("list_sidebar_stat", args)).on(
			"click",
			".stat-link",
			(e) => {
				let fieldname = $(e.currentTarget).attr("data-field");
				let label = $(e.currentTarget).attr("data-label");
				let condition = "like";
				let existing = this.list_view.filter_area.filter_list.get_filter(fieldname);
				if (existing) {
					existing.remove();
				}
				if (label == "No Tags") {
					label = "%,%";
					condition = "not like";
				}
				this.list_view.filter_area.add(this.doctype, fieldname, condition, label);
			}
		);

		this.sidebar.find(".list-stats-dropdown .stat-result").html(tag_list);
	}

	reload_stats() {
		this.sidebar.find(".stat-link").remove();
		this.sidebar.find(".stat-no-records").remove();
		this.get_stats();
	}
};
