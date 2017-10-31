// const webpack = require("webpack");
const path = require("path");

const BUILD_DIR = path.resolve(path.join(__dirname, "dist"));
const APP_DIR = path.resolve(path.join(__dirname, "client", "app"));
// let plugins = [], outputFile;

const config = {
  devtool: "source-map",
  entry: path.join(APP_DIR + "/app.js"),
  output: {
    path: BUILD_DIR,
    filename: "ngBlankUI.js",
    library: "ngBlankUI",
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      },
      { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  resolve: {
    alias: {
      angular: path.resolve(path.join(__dirname, "node_modules", "angular"))
    }
  },
  // plugins: plugins
};

module.exports = config;