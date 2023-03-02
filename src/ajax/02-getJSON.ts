import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

//const url = 'https://api.github.com/users?per_page=5'
const url = 'https://httpbin.org/delay/1'

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'mi-token': '12345'
} )

obs$.subscribe(data => console.log('data', data))