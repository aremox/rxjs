import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, throttleTime, asyncScheduler, sampleTime } from 'rxjs';

const clic$ = fromEvent<MouseEvent>( document, 'click')

clic$.pipe(
    map(({x,y}) => ({x,y})),
    sampleTime(2000)
)
.subscribe(console.log)
