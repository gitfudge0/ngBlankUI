const path    = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry:  {    app: [
    'babel-polyfill',
    path.join(__dirname, 'client', 'app/app.js')
  ]
  },
  module: {
    loaders: [
      { enforce: "pre", test: /\.js$/, exclude: [ /node_modules/], loader: 'eslint-loader',
        options: {
          fix: true,
          cache: true
        }},
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(scss|sass)$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body',
      hash: true,
      chunks: ['vendor', 'app']
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module => /node_modules/.test(module.resource)
    }),

    // // moving assets 
    // new CopyWebpackPlugin([ { from: 'client/app/assets', to: 'assets' } ]),

    // // moving config
    // new CopyWebpackPlugin([ { from: 'client/config.json', to: './' } ]),

    // // moving docs
    // new CopyWebpackPlugin([ { from: 'client/docs', to: 'docs' } ])
  ]
};