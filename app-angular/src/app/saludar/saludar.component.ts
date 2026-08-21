import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar',
  imports: [FormsModule],
  templateUrl: './saludar.component.html',

})
export class SaludarComponent {

  saludo = 'Saludo inicial modificado';

}
