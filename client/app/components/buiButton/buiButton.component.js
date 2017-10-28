// import template from './buiButton.html';
import controller from './buiButton.controller';
import './buiButton.scss';

let buiButtonComponent = {
  transclude: true,
  bindings: {
    disabled: "<"
  },
  template: `<button ng-transclude ng-disabled="$ctrl.disabled"></button>`,
  controller
};

export default buiButtonComponent;
