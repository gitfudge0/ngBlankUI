const webpack = require('webpack');
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let config  = require('../webpack.config');

config.devtool= "source-map";

config.entry = {
  app: [
    'babel-polyfill',
    path.join(__dirname, '../client', 'app/app.js')
  ]
};

config.output = {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, '..', 'client'),
  // publicPath: '/assets/'
};

config.devServer = {
  port: 3000,
  contentBase: '../client',
  hot: true,
  stats: { colors: true },
  inline: true,
  historyApiFallback: true,
  // publicPath: '/assets/'
};

config.plugins = [

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),

  new HtmlWebpackPlugin({
    template: 'client/index.html',
    inject: 'body',
    hash: true,
    chunks: ['vendor', 'app']
  }),

  new webpack.optimize.CommonsChunkPlugin({
    name: "vendor",
    minChunks: module => /node_modules/.test(module.resource)
  }),
];

module.exports = config;