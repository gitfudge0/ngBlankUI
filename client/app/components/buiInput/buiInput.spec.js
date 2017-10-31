import BuiInputModule from './buiInput';
import BuiInputController from './buiInput.controller';
import BuiInputComponent from './buiInput.component';
import BuiInputTemplate from './buiInput.html';

describe('BuiInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuiInputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuiInputController();
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
      expect(BuiInputTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BuiInputComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BuiInputTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BuiInputController);
    });
  });
});
