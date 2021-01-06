import { Component } from '@angular/core';

import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private usuariosService: UsuariosService) {
    usuariosService.obtenerUsuarios().subscribe(
      (resp) => {
        console.log('RESPONSE', resp);
      },
      (err) => {
        console.log('Error al obtener usuarios');
      }
    );
  }
}
