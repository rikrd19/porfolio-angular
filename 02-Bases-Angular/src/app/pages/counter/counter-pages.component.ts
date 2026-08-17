import { Component, signal } from "@angular/core";



@Component({
    templateUrl: "./counter-pages.component.html",
    styles: `
    button{
        padding: 10px;
        margin: 45x 20px;
        width: 100px;
        background-color: skyblue
        
    }
    `,

})
export class CounterPageComponent {
    counter = 15;
    counterSignal = signal(10)

    increaseBy(value: number) {
        this.counter += value;

        // this.counterSignal.set(this.counterSignal() + value);   // menos eficiencia accede al signal 2 veces (read + writing)

        // Recbibe una funcion que toma el valor actual como parametro (current) 
        this.counterSignal.update((current) => current + value);  // una sola operacion lectura y escritura
    }
    decreaseBy(value: number) {
        this.counter -= value;
        this.counterSignal.update((current) => current - value);
    }

    reset(value: number) {
        this.counter = 0;
        this.counterSignal.set(0);
    }

}