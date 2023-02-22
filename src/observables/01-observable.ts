import { Observable } from "rxjs";
import { Subscriber } from "rxjs/internal/Subscriber";
import { Observer } from "rxjs/internal/types";

const observer: Observer<any> = {
    next: value => console.log('siguiente [obs]:', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('Completado [obs]')
}


const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');

    const a = undefined;
    a.nombre = 'Fernando'

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe( observer);

// obs$.subscribe({
//     next: valor => console.log('next: ', valor),
//     error: error => console.warn('error', error),
//     complete: () => console.info('Completado')
    
// })









