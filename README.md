# ngBlankUI - Modern Angular UI Components for faster development

ngBlankUI is a library for unification of development of visual components and user interaction on web applications, done with relative ease and speed. The goal of this library is to provide easy to use components built with the help of AngularJS and made available as AngularJS-native UI components. 

## Dev scripts
 * `npm run build` : runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application
 * `npm run serve` : starts a dev server via `webpack-dev-server`, serving the client folder
 * `npm run watch` : alias of `serve`
 * `npm start` : (which is the default task that runs when typing gulp without providing an argument) runs serve
 * `npm run component -- --name componentName` : scaffolds a new Angular component