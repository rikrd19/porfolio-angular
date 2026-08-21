import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HijoComponent, MostrarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
