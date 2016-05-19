# Electron Base Converter

Easily convert arbitrary based numbers. Electron based desktop application.

Utilizes some experimental string based math, so we can compute those pesky ints that are 2^53+ in size.
See [strint](https://github.com/rauschma/strint) for more details on the validity of this technique for crunching large numbers in js.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Electron](http://electron.atom.io)

## Electron Installation

No prebuilt binaries as of yet, This is still very much a work in progress.
If you wish to preview this app, feel free to follow the instructions in Installation and in Running / Development.

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember electron`
* A window will open with the app running inside of it in livereload mode.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* [ember electron](https://github.com/felixrieseberg/ember-electron)
