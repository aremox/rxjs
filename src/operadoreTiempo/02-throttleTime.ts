import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, throttleTime, asyncScheduler } from 'rxjs';

const clic$ = fromEvent( document, 'click')

clic$.pipe(
    throttleTime(3000)
)
//.subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body').append(input)

const input$ = fromEvent( input, 'keyup')

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true,
    }),
    map( value => value.target['value']),
    distinctUntilChanged()
)
.subscribe(console.log)