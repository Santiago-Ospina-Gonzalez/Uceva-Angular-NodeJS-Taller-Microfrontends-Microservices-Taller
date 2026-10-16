import { AlertComponent } from './alert.component';
describe('AlertComponent', () => {
  it('maps loading and error states to the shared Bootstrap colors', () => {
    const component = new AlertComponent();
    component.alertState = 'loading';
    expect(component.getClass()).toContain('alert-primary');
    component.alertState = 'error';
    expect(component.getClass()).toContain('alert-danger');
  });
});
