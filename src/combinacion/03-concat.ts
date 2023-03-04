import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap, exhaustMap, tap, startWith, endWith, concat } from 'rxjs';


const interval$ = interval(1000)

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of('fin')
).subscribe(console.log)
