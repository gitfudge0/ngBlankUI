import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buiInputComponent from './buiInput.component';

let buiInputModule = angular.module('buiInput', [
  uiRouter
])

  .component('buiInput', buiInputComponent)

  .name;

export default buiInputModule;
