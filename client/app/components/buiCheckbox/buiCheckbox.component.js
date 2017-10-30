import template from './buiCheckbox.html';
import controller from './buiCheckbox.controller';
import './buiCheckbox.scss';

let buiCheckboxComponent = {
  transclude: true,
  bindings: {
    id: "@",
    ngModel: "="
  },
  template,
  controller
};

export default buiCheckboxComponent;
