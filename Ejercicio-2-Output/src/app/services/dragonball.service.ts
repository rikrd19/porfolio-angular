import { effect, Injectable, signal } from "@angular/core";
import { Character } from '../interfaces/character.interface';

// se crea fuera de la clase (puede ser dentro) como no va a terner dependencia alguna
const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');

    return characters ? JSON.parse(characters) : [];
}


@Injectable({ providedIn: 'root' })
export class DragonballService {

    characters = signal<Character[]>(loadFromLocalStorage());

    // Efectos del localStorage
    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });

    addCharacter(character: Character) {
        this.characters.update((list) => [...list, character]);
    }

}
