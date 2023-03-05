import {
  of,
  interval,
  take,
  delay,
  forkJoin,
} from "rxjs";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const simbolos$ = of("a", "b", "c").pipe(delay(3500));

// forkJoin(
//     numeros$,
//     intervalo$,
//     simbolos$,
//     ).subscribe(console.log)

forkJoin(numeros$, intervalo$, simbolos$).subscribe(resp=> {
    console.log('numero', resp[0]),
    console.log('intervalo', resp[1]),
    console.log('simbolo', resp[2])
});
