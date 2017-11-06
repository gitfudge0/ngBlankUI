import BuiDropdownModule from './buiDropdown';
import BuiDropdownController from './buiDropdown.controller';
import BuiDropdownComponent from './buiDropdown.component';
import BuiDropdownTemplate from './buiDropdown.html';

describe('BuiDropdown', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuiDropdownModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuiDropdownController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BuiDropdownTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BuiDropdownComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BuiDropdownTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BuiDropdownController);
    });
  });
});
