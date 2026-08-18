import { CommonModule } from '@angular/common';
import { Component, computed, signal, } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [CommonModule],
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
  // pipe de fecha 
  public date = new Date();

  // ngOnInit() {
  //   setInterval(() => {
  //     this.date = new Date();  // ← Actualiza la variable
  //     console.log('variable', this.date);
  //     // Angular detecta el cambio y actualiza el DOM
  //   }, 1000)
  // }

  // ngOnDestroy() {
  //   // ✅ Limpiar el intervalo para evitar memory leaks
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  // Pipe moneda 
  public price = 500.443434;

  // pipe pi
  public pi = 3.14159265359;

  public percentage = 0.5;
}
