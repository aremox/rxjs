import { of, interval, take, delay, forkJoin, catchError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const url = 'https://api.github.com/users'
const git_user = 'klerith'

forkJoin({
  usuario: ajax.getJSON(
    `${ url }/${ git_user}`
  ),
  repos: ajax.getJSON(
    `${ url }/${ git_user}/repos123`
  ).pipe(
    catchError(err => of(err.message))
  ),
  gists: ajax.getJSON(
    `${ url }/${ git_user}/gists`
  )
}).pipe(
  catchError(err => of(err.message))
).subscribe(console.log)
