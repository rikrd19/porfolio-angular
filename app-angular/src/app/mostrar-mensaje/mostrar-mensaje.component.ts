import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',

})
export class MostrarMensajeComponent {
mensaje: string= '';

  mostrarMensaje() {
this.mensaje = 'Hola has hecho click en el boton!';
}

resetearMensaje() {
  // Reiniciar el mensaje 
  this.mensaje = '';
}



}
