import clickOutside from './common/clickOutside';
import buiButtonComponent from './components/buiButton/buiButton.component';
import buiSwitchComponent from './components/buiSwitch/buiSwitch.component';
import buiCheckboxComponent from './components/buiCheckbox/buiCheckbox.component';
import buiStepperComponent from './buiStepper/buiStepper';
import buiInputComponent from './buiInput/buiInput';
import buiDropdownComponent from './buiDropdown/buiDropdown';

angular.module('ngBlankUI', [
  buiButtonComponent,
  buiSwitchComponent,
  buiCheckboxComponent,
  buiInputComponent,
  buiStepperComponent,
  buiDropdownComponent
])
  .component('buiButton', buiButtonComponent)
  .component('buiCheckbox', buiCheckboxComponent)
  .component('buiSwitch', buiSwitchComponent)
  .directive('clickOutside', clickOutside)
