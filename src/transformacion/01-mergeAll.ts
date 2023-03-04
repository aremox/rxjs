import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable } from 'rxjs';
import { GithubUsersResp, GitHubUser } from '../interfaces/github-user.interface';


// Referencias 
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol')
body.append( textInput, orderList)

// Helpers
const mostrarUsuarios = ( usuarios: GitHubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for(const usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url,
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append( img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li)
    }
}

// Streams 

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(target => target['value']),
    map<string, Observable<GithubUsersResp>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`)),
    mergeAll<Observable<GithubUsersResp>>(),
    map<GithubUsersResp, GitHubUser[]>(users => users.items)
).subscribe(mostrarUsuarios)