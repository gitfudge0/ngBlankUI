import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buiCheckboxComponent from './buiCheckbox.component';

let buiCheckboxModule = angular.module('buiCheckbox', [
  uiRouter
])

  .component('buiCheckbox', buiCheckboxComponent)

  .name;

export default buiCheckboxModule;
