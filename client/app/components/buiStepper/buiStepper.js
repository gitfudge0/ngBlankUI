import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buiStepperComponent from './buiStepper.component';

let buiStepperModule = angular.module('buiStepper', [
  uiRouter
])

  .component('buiStepper', buiStepperComponent)

  .name;

export default buiStepperModule;
