import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap, exhaustMap, tap, startWith, endWith, concat, merge, combineLatest, forkJoin, delay } from 'rxjs';


const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

combineLatest(
    keyup$.pipe(map(v=> v['key'])),
    click$.pipe(map(v=> v['y'])),
    ).subscribe(console.log)
