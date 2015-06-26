global.window = {};
global.navigator = {};
babel = require('babel-core/register')({
  stage: 1
});

var app = require('./app');
var http = require('http').Server(app);
var io = require('socket.io')(http);

if (process.env.NODE_ENV === 'development') {
  require("../../webpack/server");
}
io.on('connection', function(socket) {
  socket.on('action', function(payload) {
    socket.broadcast.emit('replay', {
      socket: socket.id,
      action: payload
    });
  });
});

var port = process.env.PORT || 3010;
http.listen(port, function() {
  console.log("listening on " + port);
});
