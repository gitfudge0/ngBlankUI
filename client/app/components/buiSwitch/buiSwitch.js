import angular from 'angular';
import uiRouter from 'angular-ui-router';
import buiSwitchComponent from './buiSwitch.component';

let buiSwitchModule = angular.module('buiSwitch', [
  uiRouter
])

  .component('buiSwitch', buiSwitchComponent)

  .name;

export default buiSwitchModule;
