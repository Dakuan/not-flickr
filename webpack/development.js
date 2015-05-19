var path = require('path'),
  autoprefixer = require('autoprefixer-core'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './stylesheets/wrdbr.less',
    './client/app.jsx'
  ],
  resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", '.es6', '.jsx', '.less','.css', '.json']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'wrdbr.js'
  },
  devtool: '#inline-source-map',
  module: {
    loaders: [{
      test: /(.es6|.jsx)/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader!postcss-loader")
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("wrdbr.css", {
      allChunks: true
    })
  ],
  postcss: [autoprefixer]
};
