import BuiStepperModule from './buiStepper';
import BuiStepperController from './buiStepper.controller';
import BuiStepperComponent from './buiStepper.component';
import BuiStepperTemplate from './buiStepper.html';

describe('BuiStepper', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BuiStepperModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BuiStepperController();
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
      expect(BuiStepperTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BuiStepperComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BuiStepperTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BuiStepperController);
    });
  });
});
