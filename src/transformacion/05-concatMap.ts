import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap } from 'rxjs';
import { GithubUsersResp, GitHubUser } from './interfaces/github-user.interface';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent( document, 'click');

click$.pipe(
    concatMap(() => interval$)
)
.subscribe( console.log)