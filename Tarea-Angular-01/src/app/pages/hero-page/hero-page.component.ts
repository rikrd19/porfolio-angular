import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styles: []
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);


  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  // getHeroDescription() {     // reemplazado por heroDescription 'Senal Computada'
  //   return `${this.name()} - ${this.age()}`;
  // }

  // regresa el valor Capitalizado (MAYÚSCULAS)
  capitalizeName = computed(() => this.name().toUpperCase());


  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
