require('es6-promise').polyfill();

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var stylelint = require('stylelint');

var TARGET = process.env['npm_lifecycle_event'];
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
// var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var common = {
  entry: APP_PATH,
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint', 'jscs'],
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loaders: ['postcss'],
        include: APP_PATH
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: APP_PATH
      }
    ]
  },
  postcss: function() {
    return [stylelint({
      rules: {
        'color-hex-case': 2
      }
    })];
  },
  plugins: [
    // Important! move HotModuleReplacementPlugin below
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'Kanban App Fun'
    })
  ]
};

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
