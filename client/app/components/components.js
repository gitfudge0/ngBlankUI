import angular from 'angular';
import Home from './home/home';
import Button from './buiButton/buiButton';
import Switch from './buiSwitch/buiSwitch';
import Checkbox from './buiCheckbox/buiCheckbox';
import Stepper from './buiStepper/buiStepper';

let componentModule = angular.module('app.components', [
  Home,
  Button,
  Switch,
  Checkbox,
  Stepper,
])

  .name;

export default componentModule;
