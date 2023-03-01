import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, throttleTime, asyncScheduler, sampleTime, sample } from 'rxjs';

const interval$ = interval(500);

const click$ = fromEvent(document, 'click')

interval$.pipe(
    sample(click$)
)
.subscribe(console.log)
