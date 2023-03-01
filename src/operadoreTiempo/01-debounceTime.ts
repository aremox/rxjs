import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime } from 'rxjs';

const clic$ = fromEvent( document, 'click')

clic$.pipe(
    debounceTime(3000)
)
//.subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent( input, 'keyup')

input$.pipe(
    debounceTime(1000),
    map( value => value.target['value']),
    distinctUntilChanged()
)
.subscribe(console.log)