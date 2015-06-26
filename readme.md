# Not Flickr

[![Circle CI](https://circleci.com/gh/Dakuan/not-flickr/tree/master.svg?style=svg&circle-token=e2cfce5268e1280113c07025492c8e7d4e9f474c)](https://circleci.com/gh/Dakuan/not-flickr/tree/master)

An example app using an antique Flickr API to demonstrate modern front end engineering techniques.

## Features

* High performance view layer via [React.js](http://facebook.github.io/react/)
* Server side rendering via [Node.js](https://nodejs.org/)
* Progresive enhancement (sort of works without javascript)
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

## Live Debug

All interactions are sent to the server via websockets. You can listen in on another users session:

1. open the app with a  [debug flag](http://not-flickr.herokuapp.com?debug=true)
2. copy the debug token
3. open another tab with the listen flag eg `http://not-flickr.herokuapp.com?listenTo=DEBUG_TOKEN`
4. profit.

## Todo:

* error handling
* ~~live debug~~
* gzip assets
* ~~deploy to heroku~~
* ~~add CI~~
* ~~try out Code Climate~~
