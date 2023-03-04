import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap, exhaustMap, tap } from 'rxjs';
import { GithubUsersResp, GitHubUser } from './interfaces/github-user.interface';


// Helper
const peticionHttpLogin = (userPass) => 
ajax.post('https://reqres.in/api/login?delay=1', userPass)
.pipe(
    map(v => v.response['token']),
    catchError(err => of('xxx'))
)

const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')

// Configuracion 
inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail,inputPass,submitBtn)

document.querySelector('body').append(form)

// Streams 
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap( ev => ev.preventDefault()),
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    tap( console.log),
    exhaustMap(peticionHttpLogin)

)

submitForm$.subscribe(token => {
    console.log(token)
})


