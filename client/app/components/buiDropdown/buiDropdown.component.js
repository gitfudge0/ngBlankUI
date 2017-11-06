import template from './buiDropdown.html';
import controller from './buiDropdown.controller';
import './buiDropdown.scss';

let buiDropdownComponent = {
  transclude: true,
  bindings: {
    list: "=",
    pos: "@"
  },
  template,
  controller
};

export default buiDropdownComponent;
