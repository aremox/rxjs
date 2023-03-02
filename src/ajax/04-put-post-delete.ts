import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

//const url = 'https://api.github.com/users2?per_page=5'
const url = 'https://httpbin.org/delay/1'

ajax.post(url,{
    id: 1,
    nombre: 'Fernando'
},{
    'mi-token': 'ABC123'
}).subscribe(console.log)

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id:1,
        nombre: 'Ivan'
    }

}).subscribe(console.log)