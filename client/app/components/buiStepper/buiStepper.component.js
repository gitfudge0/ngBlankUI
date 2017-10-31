import template from './buiStepper.html';
import controller from './buiStepper.controller';
import './buiStepper.scss';

let buiStepperComponent = {
  bindings: {
    ngModel: "=",
    diff: "@"
  },
  template,
  controller
};

export default buiStepperComponent;
