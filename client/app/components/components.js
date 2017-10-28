import angular from 'angular';
import Home from './home/home';
import Button from './buiButton/buiButton';
import Switch from './buiSwitch/buiSwitch';

let componentModule = angular.module('app.components', [
  Home,
  Button,
  Switch
])

  .name;

export default componentModule;
