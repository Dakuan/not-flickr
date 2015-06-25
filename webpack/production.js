var path = require('path'),
  autoprefixer = require('autoprefixer-core'),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development'))
});

module.exports = {
  context: path.join(__dirname, '../src'),
  entry: [
    './stylesheets/wrdbr.less',
    './client/boot.es6'
  ],
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", '.es6', '.jsx', '.less', '.css', '.json']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'wrdbr.js'
  },
  module: {
    loaders: [{
      test: /(.es6|.jsx)/,
      loader: 'babel',
      query: {
        stage: 1,
        optional: ['runtime']
      },
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less-loader")
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new ExtractTextPlugin("wrdbr.css", {
      allChunks: true
    }),
    definePlugin
  ],
  postcss: [autoprefixer]
};
