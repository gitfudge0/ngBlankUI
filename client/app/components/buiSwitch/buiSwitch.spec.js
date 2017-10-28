import BuiSwitchModule from './buiSwitch';
import BuiSwitchController from './buiSwitch.controller';
import BuiSwitchComponent from './buiSwitch.component';
import BuiSwitchTemplate from './buiSwitch.html';

describe('BuiSwitch', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuiSwitchModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuiSwitchController();
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
      expect(BuiSwitchTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BuiSwitchComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BuiSwitchTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BuiSwitchController);
    });
  });
});
