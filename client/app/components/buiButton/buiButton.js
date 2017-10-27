import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buiButtonComponent from './buiButton.component';

let buiButtonModule = angular.module('buiButton', [
  uiRouter
])

  .component('buiButton', buiButtonComponent)

  .name;

export default buiButtonModule;
