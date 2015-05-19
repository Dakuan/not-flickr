var express = require('express'),
  path = require('path'),
  babel = require('babel-core/register'),
  renderSpa = require('./util/render-spa').renderSpa,
  data = require('./data/messages-data'),
  app = express();

// view engine
app.set('views', 'src/server/views/');
app.set('view engine', 'jade');


app.use('/public', express.static(path.join(__dirname, '../../build')));

app.get('/', function(req, res, next) {

  var messages = [{
    content: 'from server'
  }];

  data(req.query.page || 1)
    .then(function(messages) {
      var data = {
        messages: messages
      };
      renderSpa(res, data);
    });
});

module.exports = app;
