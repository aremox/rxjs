import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged } from 'rxjs';

const numbers$ = of(1,1,1,1,1,3,3,3,3,3,2,2,2,4,4,5,3,1);

numbers$.pipe(
    distinct()
)
.subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('completado')
})

numbers$.pipe(
    distinctUntilChanged()
)
.subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('completado')
})

interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
]

from( personajes )
.pipe(
    distinct(x => x.nombre )
)
.subscribe(console.log)
console.log('distinctUntilChanged')
from( personajes )
.pipe(
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre )
)
.subscribe(console.log)

