import { interval, Observer, timer } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado: ')
}

const hoyEn5 = new Date();

hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)

const interval$ = interval(1000)
//const timer$ = timer(2000, 1000)
const timer$ = timer(hoyEn5)

console.log('inicio')
//interval$.subscribe( observer)
timer$.subscribe(observer)
console.log('fin')