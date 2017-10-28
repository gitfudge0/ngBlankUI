# ngBlankUI - Modern Angular UI Components for faster development

ngBlankUI is a library for unification of development of visual components and user interaction on web applications, done with relative ease and speed. The goal of this library is to provide easy to use components built with the help of AngularJS and made available as AngularJS-native UI components. 

## Components
### Buttons
#### Default Buttons
```
<bui-button class="bui-btn">Button</bui-button>
<bui-button class="bui-btn bui-btn-primary">Button</bui-button>
<bui-button class="bui-btn bui-btn-success">Button</bui-button>
<bui-button class="bui-btn bui-btn-warning">Button</bui-button>
<bui-button class="bui-btn bui-btn-danger">Button</bui-button>
```
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #007bff;border: 1px solid #007bff;">Button</button>
<button style="background: #007bff;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: white;border: 1px solid #007bff;">Button</button>
<button style="background: #4CD964;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: white;border: 1px solid #4CD964;">Button</button>
<button style="background: #ff9500;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: white;border: 1px solid #ff9500;">Button</button>
<button style="background: #ff3b30;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: white;border: 1px solid #ff3b30;">Button</button>

#### Hollow Buttons
```
<bui-button class="bui-btn">Button</bui-button>
<bui-button class="bui-btn bui-btn-hollow-primary">Button</bui-button>
<bui-button class="bui-btn bui-btn-hollow-success">Button</bui-button>
<bui-button class="bui-btn bui-btn-hollow-warning">Button</bui-button>
<bui-button class="bui-btn bui-btn-hollow-danger">Button</bui-button>
```
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #007bff;border: 1px solid #007bff;">Button</button>
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #4CD964;border: 1px solid #4CD964;">Button</button>
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #ff9500;border: 1px solid #ff9500;">Button</button>
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #ff3b30;border: 1px solid #ff3b30;">Button</button>

#### Rounded Buttons
```
<bui-button class="bui-btn bui-btn-primary bui-btn-rounded">Button</bui-button>
<bui-button class="bui-btn bui-btn-hollow-primary bui-btn-rounded">Button</bui-button>
```
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #007bff;border: 1px solid #007bff;border-radius: 16px;">Button</button>
<button style="background: #007bff;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: white;border: 1px solid #007bff;border-radius: 16px;">Button</button>

#### Large and Small Buttons
<button style="background: white;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: #007bff;border: 1px solid #007bff;font-size: 24px;">Button</button>
<button style="background: #007bff;padding: 4px 24px 4px 24px;border-radius: 4px;margin: 8px;color: white;border: 1px solid #007bff;border-radius: 16px;  font-size: 12px;padding: 4px 8px 4px 8px;">Button</button>

---
## Dev scripts
 * `npm run build` : runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application
 * `npm run serve` : starts a dev server via `webpack-dev-server`, serving the client folder
 * `npm run watch` : alias of `serve`
 * `npm start` : (which is the default task that runs when typing gulp without providing an argument) runs serve
 * `npm run component -- --name componentName` : scaffolds a new Angular component
