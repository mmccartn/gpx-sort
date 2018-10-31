gpx-sort
========
Sort GPX track points by date

Requirements
------------
### Node.js 10+
 * Linux: `apt install nodejs` ([see Ubuntu/Debian section](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)) or `pacman -S nodejs` (Arch Linux)
 * OSX: `brew install node` using [Homebrew](http://brew.sh/)
 * Windows: [Install](https://nodejs.org/en/download/)

Installation
------------
1. Clone repo: `git clone git@github.com:mmccartn/gpx-sort.git`
2. Install dependencies: `npm install`

Usage
-----
```
$ node ./index.js --help
usage: index.js [-h] [-v] [-i INPUT] [-o OUTPUT]

GPX Sort

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -i INPUT, --input INPUT
                        Input file path
  -o OUTPUT, --output OUTPUT
                        Output file path
```
