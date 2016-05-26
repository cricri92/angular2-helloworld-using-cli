import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HolaAngular2AppComponent } from '../app/hola-angular-2.component';

beforeEachProviders(() => [HolaAngular2AppComponent]);

describe('App: HolaAngular2', () => {
  it('should create the app',
      inject([HolaAngular2AppComponent], (app: HolaAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hola-angular-2 works!\'',
      inject([HolaAngular2AppComponent], (app: HolaAngular2AppComponent) => {
    expect(app.title).toEqual('hola-angular-2 works!');
  }));
});
