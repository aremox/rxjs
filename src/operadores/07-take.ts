import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of } from 'rxjs';

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
    tap(t => console.log('tap', t)),
    take(3)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('completado')
})