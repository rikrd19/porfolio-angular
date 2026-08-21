import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HijoComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Two way Binding in Angular';
}
