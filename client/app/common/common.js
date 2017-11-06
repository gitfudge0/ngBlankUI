import angular from 'angular';
import clickOutside from './clickOutside';

let commonModule = angular.module('app.common', [
])
  .directive('clickOutside', clickOutside)  
  .name;

export default commonModule;
