import { Observer, of, range, asyncScheduler } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

// const src1$ = of(1,2,3,4,5);

const src2$ = range(5);

// para que sea asincrono debe tener los tres parametros obligatoriamente
const src3$ = range(1, 5, asyncScheduler );

// src1$.subscribe( observer );

console.log('inicio observable sync');
src2$.subscribe( observer );
console.log('fin observable sync');

console.log('inicio observable async');
src3$.subscribe( observer );
console.log('fin observable async');