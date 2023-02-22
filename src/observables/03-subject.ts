import { Observable, Subject } from "rxjs";
import { Subscriber } from "rxjs/internal/Subscriber";
import { Observer } from "rxjs/internal/types";

const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado: ')
}

const intervalos$ = new Observable<number>( subs => {

    const interval = setInterval(() => {
        subs.next( Math.random())
    }, 1000);

    return () => {
        clearInterval( interval )
        console.log('Intervalo destruido')
    }
})

/**
 * 1- Casteo multiple
 * 2- Tambien es un observable 
 * 3- Next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalos$.subscribe(subject$)

// const subs1 = intervalos$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = intervalos$.subscribe(rnd => console.log('subs2', rnd))


const subj1 = subject$.subscribe(rnd => console.log('subj1', rnd))
const subj2 = subject$.subscribe(rnd => console.log('subj2', rnd))


setTimeout(() => {
   subject$.next(10);
   subject$.complete()
   subscription.unsubscribe();

   console.log('Completado timeout')
}, 5000)