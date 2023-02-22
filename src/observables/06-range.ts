import { asapScheduler, asyncScheduler, of, range } from "rxjs";


// const src$ = of(1,2,3,4,5)
const src$ = range(-5,10, asyncScheduler)

console.log('inicio')
src$.subscribe(console.log)
console.log('fin')