babel = require('babel-core/register')({
  stage: 1
});

var gulp = require('gulp'),
  _ = require('underscore'),
  webpack = require('webpack'),
  server = require('gulp-develop-server'),
  eslint = require('gulp-eslint'),
  Transform = require('stream').Transform,
  runSequence = require('run-sequence'),
  WebpackDevServer = require('webpack-dev-server'),
  mocha = require('gulp-mocha');

var paths = {
  specs: "./tests/specs/**/*.es6",
  scripts: "./src/**/*.es6",
  components: "./src/ui/**/*.jsx",
  server: "./src/server/**/*.es6",
  integration: "./tests/integration/**/*.es6"
};

gulp.task("default", ["server:start", "webpack"], function() {
  gulp.watch([paths.specs, paths.scripts, paths.components], function() {
    return runSequence("test:spec", "lint", "server:restart");
  });
  gulp.watch([paths.integration], ["test:integration"]);
});

gulp.task("server:restart", function(done) {
  return server.restart(done);
});

// run server locally
gulp.task('server:start', function() {
  var opts = {
    NODE_ENV: 'development'
  }
  server.listen({
    path: 'src/server/index.js',
    env: opts
  });
});

gulp.task("test:spec", function() {
  return gulp.src(paths.specs, {
      read: false,
      compilers: {
        js: "babel/register"
      }
    })
    .pipe(mocha({
      reporter: "nyan"
    }));
});

gulp.task("test:integration", function() {
  return gulp.src(paths.integration, {
      read: false,
      compilers: {
        js: "babel/register"
      }
    })
    .pipe(mocha({
      reporter: "nyan"
    }));
});

// Start a webpack-dev-server
gulp.task("webpack", function(callback) {

  var stream = new Transform({
    objectMode: true
  });

  var config = require('./webpack/development');

  new WebpackDevServer(webpack(config), {
    quiet: true
      // server and middleware options
  }).listen(3000, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    console.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");

    // keep the server alive or continue?
    callback();
  });

  return stream;
});

gulp.task('lint', function() {
  return gulp.src([paths.scripts, paths.components])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format());
});
