import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap, exhaustMap, tap, startWith, endWith } from 'rxjs';


const numeros$ = of(1,2,3,4).pipe(
    startWith(0),
    endWith(10)
)

numeros$.subscribe(console.log)

