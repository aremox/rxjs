import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip } from 'rxjs';

const boton = document.createElement('button')
boton.innerHTML = 'Detener Timer'

document.querySelector('body').append(boton)

const counter$ = interval(1000)
//const clickBtn$ = fromEvent( boton, 'click')
const clickBtn$ = fromEvent( boton, 'click').pipe(
    tap(t => console.log('tap antes de skip', t)),
    skip(1),
    tap(t => console.log('tap despues de skip', t)),
)

counter$
.pipe(
    
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: ()=> console.log('completado')
})
