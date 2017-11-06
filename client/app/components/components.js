import angular from 'angular';
import Home from './home/home';
import Button from './buiButton/buiButton';
import Switch from './buiSwitch/buiSwitch';
import Checkbox from './buiCheckbox/buiCheckbox';
import Stepper from './buiStepper/buiStepper';
import Input from './buiInput/buiInput';
import Dropdown from './buiDropdown/buiDropdown';

let componentModule = angular.module('app.components', [
  Home,
  Button,
  Switch,
  Checkbox,
  Stepper,
  Input,
  Dropdown
])

  .name;

export default componentModule;
