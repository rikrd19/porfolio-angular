import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterAddComponent, CharacterListComponent],
})

export class DragonballSuperComponent {

  //inyeccion de dependencias
  // 1.  inyeccion tradicional 
  // constructor (
  // public dragonballService: DragonballService
  // ){}

  // 2. nueva inyeccion de dependencias -toma la instancia de clases en angular
  public dragonballService = inject(DragonballService);



}