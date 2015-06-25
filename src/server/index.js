var fs = require("fs");
var path = require("path");
var nock = require("nock");

global.window = {};
global.navigator = {};
babel = require('babel-core/register')({
  stage: 1
});

var app = require('./app');

if (process.env.NODE_ENV === 'development') {
  require("../../webpack/server");
}

app.listen(3010, function() {
  console.log('listening on 3010');
});
