import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, interval, take, takeUntil } from 'rxjs';
import { GithubUsersResp, GitHubUser } from '../interfaces/github-user.interface';

const letras$ = of('a','b','c',);

letras$.pipe(
    mergeMap((letra) => interval(1000).pipe(
        map(i => letra + i),
        take(3)
    ))
)
// .subscribe({
//     next: val => console.log( 'next', val),
//     complete: () => console.log('completado')
// })

const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$ = fromEvent( document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        takeUntil(mouseup$)
    ))
).subscribe(console.log)