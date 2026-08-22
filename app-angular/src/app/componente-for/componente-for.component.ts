import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
 
})
export class ComponenteForComponent {

  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprender Typescript'
  ];

  agregarTarea(nuevaTarea: string):void{
    if(nuevaTarea)
      this.tareas.push(nuevaTarea);
  }
}
