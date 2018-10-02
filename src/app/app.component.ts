import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  inicioMenu: boolean;
  contactoMenu: boolean;

  constructor() {
    this.inicioMenu = true;
    this.contactoMenu = false;
  }

  changeMenu( nuevoParaMenu ) {
    switch ( nuevoParaMenu ) {
      case 'inicio':
        this.inicioMenu = true;
        this.contactoMenu = false;
        break;

      case 'contacto':
        this.contactoMenu = true;
        this.inicioMenu = false;
      break;
      default:
        break;
    }
  }
}
