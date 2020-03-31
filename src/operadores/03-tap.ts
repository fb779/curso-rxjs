import { Observer, range, from, fromEvent } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const numeros$ = range(1, 5);


numeros$.pipe(
    tap( x => console.log('tap console', x) ),
    // tap(observer),
    tap({
        next: val => console.log(val),
        complete: ()=> console.log('completado partial observer')
    })
).subscribe( numero => console.log('Subs',numero) )