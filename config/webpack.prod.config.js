const path    = require('path');
let config  = require('../webpack.config');

config.entry =  path.join(path.join(__dirname, "../client", "app") + "/prod.js");
config.output = {
  path: path.resolve(path.join(__dirname, "../dist")),
  filename: "ngBlankUI.js",
  library: "ngBlankUI",
  libraryTarget: "umd"
}

module.exports = config;