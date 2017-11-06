import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buiDropdownComponent from './buiDropdown.component';

let buiDropdownModule = angular.module('buiDropdown', [
  uiRouter
])

.component('buiDropdown', buiDropdownComponent)

.name;

export default buiDropdownModule;
