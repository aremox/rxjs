import { range, map, fromEvent, filter, from } from 'rxjs';


// range(1,10).pipe(
//     filter(value => value % 2 === 1)
// ).subscribe(console.log);


range(20,30).pipe(
    filter((value, i) => {
        console.log('index',i)
        return value % 2 === 1
    })
)//.subscribe(console.log);

interface Personaje {
        tipo: string,
        nombre: string
    }

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    },
]

from(personajes ).pipe(
    filter(v => v.tipo !== 'heroe')
).subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map( event => event.code),
    filter( ec => ec === 'Enter')
);

keyup$.subscribe(console.log)