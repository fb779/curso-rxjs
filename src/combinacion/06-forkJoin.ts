import { Observer, of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const numeros$ = of(1,2,3,4,5);
const interval$ = interval( 1000 ).pipe( take(3));
const letras$ = of('a','b','c').pipe( delay(4000));


// forkJoin(
//     numeros$, interval$, letras$
// ).subscribe(console.log);

forkJoin(
    {
        num: numeros$,
        int: interval$,
        let: letras$
    }
).subscribe(console.log);