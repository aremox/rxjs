import { range, map, fromEvent, filter, from, tap, interval, take, reduce, scan, of, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged, distinctUntilKeyChanged, debounceTime, throttleTime, asyncScheduler, sampleTime, sample, auditTime } from 'rxjs';

const interval$ = interval(500);

interval$.pipe(
    auditTime(2000)
)
.subscribe(console.log)
