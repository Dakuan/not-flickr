var fs = require("fs");
var path = require("path");
var nock = require("nock");

global.window = {};
babel = require('babel-core/register')({
  stage: 1
});

var app = require('./app');

if (process.env.NODE_ENV === 'development') {
  require("../../webpack/server");
}

app.listen(3043, function() {
  console.log('listening on 3043');
});
