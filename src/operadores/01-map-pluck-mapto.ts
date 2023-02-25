import { range, map, fromEvent, pluck, mapTo } from 'rxjs';


// range(1,5)
// .pipe(
//     map<number,number>(val => {
//         return val * 10
//     })
// )
// .subscribe( console.log)

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupBruto$ = keyup$.pipe()

const keyupCode$ = keyup$.pipe(
    map( event => event.code)
)
const keyupPluck$ = keyup$.pipe(
    pluck( 'target','baseURI')
)
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
)


keyupBruto$.subscribe( code => console.log('Bruto', code));
keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( code => console.log('pluck', code));
keyupMapTo$.subscribe( code => console.log('mapTo', code));