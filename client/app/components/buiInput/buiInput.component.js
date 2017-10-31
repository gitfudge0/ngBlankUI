import template from './buiInput.html';
import controller from './buiInput.controller';
import './buiInput.scss';

let buiInputComponent = {
  bindings: {
    ngModel: "=",
    type: "@",
    placeholder: "@"
  },
  template,
  controller
};

export default buiInputComponent;
