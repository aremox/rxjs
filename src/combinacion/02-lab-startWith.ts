import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of, fromEvent, debounceTime, pluck, mergeAll, Observable, mergeMap, switchMap, interval, take, concatMap, exhaustMap, tap, startWith, endWith } from 'rxjs';





const loadingdiv = document.createElement('div')
loadingdiv.classList.add('loading')

loadingdiv.innerHTML = 'Cargando...'

const body = document.querySelector('body')

// stream
ajax.getJSON('https://reqres.in/api/user/2?delay=3')
.pipe(
    startWith(true),

)
.subscribe(resp => {
    if(resp === true){
        body.append(loadingdiv)
    }else{
        document.querySelector('.loading').remove();
    }
    console.log(resp)
})
