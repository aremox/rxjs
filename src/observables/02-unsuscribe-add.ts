import { Observable } from "rxjs";
import { Subscriber } from "rxjs/internal/Subscriber";
import { Observer } from "rxjs/internal/types";

// Estructura observable, es como se va a comportar el suscrptor
const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado: ')
}

// Observable
const intervalo$ = new Observable<number>( subs => {

    let contador = 0;

    const interval = setInterval(() => {
        contador ++;
        subs.next(contador)
        console.log(contador)
    }, 1000)

    setTimeout(()=>{
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    }
})
//
// Suscripcion al observable y se le pasa el comportamiento (observer)
//

// const subscripcion1 = intervalo$.subscribe( num => console.log('Num: ', num));
// const subscripcion2 = intervalo$.subscribe( num => console.log('Num: ', num));
// const subscripcion3 = intervalo$.subscribe( num => console.log('Num: ', num));
const subscripcion1 = intervalo$.subscribe( observer);
const subscripcion2 = intervalo$.subscribe( observer);
const subscripcion3 = intervalo$.subscribe( observer);

// agrupamos suscripciones para gestionarlas juntas
subscripcion1.add(subscripcion2)
subscripcion1.add(subscripcion3)

// Nos des-suscribimos
setTimeout(() => {
     subscripcion1.unsubscribe()
    // subscripcion2.unsubscribe()
    // subscripcion3.unsubscribe()

    console.log('Completado timeout')
}, 5000)
