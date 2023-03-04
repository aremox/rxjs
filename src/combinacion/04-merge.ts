import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap, exhaustMap, tap, startWith, endWith, concat, merge } from 'rxjs';


const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

merge(
    keyup$.pipe(map(v=> v.type)),
    click$.pipe(map(v=> v.type)),
    ).subscribe(console.log)
