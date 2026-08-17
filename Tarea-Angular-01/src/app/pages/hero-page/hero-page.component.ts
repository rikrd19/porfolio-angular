import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [],
  templateUrl: './hero-page.component.html',
  styles: []
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

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
