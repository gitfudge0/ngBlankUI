import BuiButtonModule from './buiButton';
import BuiButtonController from './buiButton.controller';
import BuiButtonComponent from './buiButton.component';
import BuiButtonTemplate from './buiButton.html';

describe('BuiButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuiButtonModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuiButtonController();
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
      expect(BuiButtonTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BuiButtonComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BuiButtonTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BuiButtonController);
    });
  });
});
