import buiButtonComponent from './components/buiButton/buiButton.component';
import buiSwitchComponent from './components/buiSwitch/buiSwitch.component';
import buiCheckboxComponent from './components/buiCheckbox/buiCheckbox.component';

angular.module('ngBlankUI', [
  buiButtonComponent,
  buiSwitchComponent,
  buiCheckboxComponent
])
  .component('buiButton', buiButtonComponent)
  .component('buiCheckbox', buiCheckboxComponent)
  .component('buiSwitch', buiSwitchComponent)
