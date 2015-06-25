# Not Flickr

An example app using an antique Flickr API to demonstrate modern front end engineering techniques.

## Features

* High performance view layer via [React.js](http://facebook.github.io/react/)
* Server side rendering via [Node.js](https://nodejs.org/)
* Progresive enhancment (sort of works without javascript)
* Next generation javascript (es6/7) in a functional lisp-like style thanks to [Babel](https://babeljs.io/), [Ramda](http://ramdajs.com/0.15/index.html) and [Immutable.js](http://facebook.github.io/immutable-js/)
* Unidirectional dataflow with [Flummox](http://acdlite.github.io/flummox)
* Integration tests with [Nock](https://github.com/pgte/nock) and [Supertest](https://github.com/visionmedia/supertest)
* BDD specs with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/)
* Sweet development workflow with [Webpack](http://webpack.github.io/) and [Gulp](http://gulpjs.com/)

## Requirements

* node.js

## Install

``` bash
$ git clone git@github.com:Dakuan/not-flickr.git
$ npm install
$ npm install gulp -g

```

## Run
``` bash
$ gulp
```

## Todo:

* error handling
* live debug
* gzip assets
* deploy to heroku
* add CI
* try out Code Climate
