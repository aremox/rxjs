import { from, Observer, of } from 'rxjs';


const observer: Observer<any> = {
    next: value => console.log('siguiente:', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado: ')
};

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from( miIterable).subscribe(observer)


// const source$ = from([1,2,3,4,5,6])
// const source$ = of(...[1,2,3,4,5,6])
// const source$ = from('Ivan')
const source$ = from( fetch('https://api.github.com/users/klerith'))

// source$.subscribe(async (resp) => {
//     console.log(resp);

//     const dataResp = await resp.json();
//     console.log(dataResp)
// })


source$.subscribe(observer)