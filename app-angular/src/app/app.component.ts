import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteIfComponent],
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'Directiva @if en Angular';
}
