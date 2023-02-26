import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan } from 'rxjs';

const numbers = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from( numbers)
.pipe(
    reduce( totalAcumulador,0)
)
.subscribe(v => console.log('reduce', v))

// scan
from( numbers)
.pipe(
    scan( totalAcumulador,0)
)
.subscribe(v => console.log('scan', v))

//Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}
const users: Usuario[] = [
    {id: 'ivan', autenticado: false, token: null},
    {id: 'ivan', autenticado: true, token: 'ABC'},
    {id: 'ivan', autenticado: true, token: 'ABC123'},
];

const state$ = from(users).pipe(
    scan( (acc, cur)=> {
        return {...acc, ...cur}
    }, {edad: 33})
)

const id$ = state$.pipe(
    map( (state: Usuario) => state)
);

id$.subscribe(console.log)