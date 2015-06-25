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

var port = process.env.PORT || 3010;
app.listen(port, function() {
  console.log("listening on " + port);
});
