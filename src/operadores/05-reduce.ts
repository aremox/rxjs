import { range, map, fromEvent, filter, from, tap, interval, take, reduce } from 'rxjs';

const numbers = [1,2,3,4,5];


const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 5);

console.log('total arr', total)

interval(500).pipe(
    take(6),
    tap( console.log),
    reduce(totalReducer,5)
).subscribe({
    next: val => console.log('next',val),
    complete: () => console.log('complete')
})