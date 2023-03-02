import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://api.github.com/users2?per_page=5'
//const url = 'https://httpbin.org/delay/1'

const atrapaError = (err: AjaxError)=> {
    console.warn('error en:', err.message);
    return of({});
    }

const obs$ = ajax.getJSON( url)

const obs2$ = ajax( url )


// const obs$ = ajax.getJSON( url).pipe(
//     catchError(atrapaError)
// )

// const obs2$ = ajax( url ).pipe(
//     catchError(atrapaError)
// )

obs$.pipe(
    catchError(atrapaError)
)
.subscribe({
    next: val =>console.log('next subs', val),
    error: err => console.warn('error subs', err),
    complete: () => console.log('completo subs')
})
//obs2$.subscribe(data => console.log('ajax', data))