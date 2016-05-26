import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hola-angular-2-app',
  templateUrl: 'hola-angular-2.component.html',
  styleUrls: ['hola-angular-2.component.css']
})
export class HolaAngular2AppComponent {
  mensaje = 'Hola mundo en Angular 2 con angular-cli!';
}
