from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in visualize/__init__.py
from visualize import __version__ as version

setup(
	name="visualize",
	version=version,
	description="Display Setting System",
	author="Tri Evendi",
	author_email="evendyx@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
