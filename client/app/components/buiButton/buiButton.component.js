// import template from './buiButton.html';
import controller from './buiButton.controller';
import './buiButton.scss';

let buiButtonComponent = {
  transclude: true,
  bindings: {},
  template: `<button ng-transclude></button>`,
  controller
};

export default buiButtonComponent;
