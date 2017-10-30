import BuiCheckboxModule from './buiCheckbox';
import BuiCheckboxController from './buiCheckbox.controller';
import BuiCheckboxComponent from './buiCheckbox.component';
import BuiCheckboxTemplate from './buiCheckbox.html';

describe('BuiCheckbox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuiCheckboxModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuiCheckboxController();
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
      expect(BuiCheckboxTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BuiCheckboxComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BuiCheckboxTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BuiCheckboxController);
    });
  });
});
