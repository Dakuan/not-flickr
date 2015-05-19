var app = require('./app');

if (process.env.NODE_ENV === 'development') {
  require("../../webpack/server");
}

app.listen(3043, function() {
  console.log('listening on 3043');
});
