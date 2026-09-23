import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
})
export class Usuario {
  usuario: string = '';
  contrasena: string = '';
  ucorrecto: string = 'Alex';
  ccorrecta: string = '22334';
  mensaje: string = '';

    validar(): void {
        if (this.usuario != this.ucorrecto) {
            this.mensaje = 'El nombre de usuario no es válido.';
        } else if (this.contrasena != this.ccorrecta) {
            this.mensaje = 'La contraseña no es válida.';
        } else {
            this.mensaje = 'Bienvenido al sistema, ' + this.usuario + '.';
        }
    }
}
