import { Observer, of, from } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

/**
 * of: generar secuencias apartir de los datos provistos
 * from: crean observables en base a un array, promise, iterable, observable
 */

// const src1$ = from([1,2,3,4,5]);
// const src2$ = of([1,2,3,4,5]);
// src1$.subscribe( observer );
// src2$.subscribe( observer );

/**
 * Consultar una api y iterar sus elementos, generando observables con el from
 */
// const src1$ = from( fetch('https://jsonplaceholder.typicode.com/users'));
// src1$.subscribe( async (res)=>{
//     const data = await res.json();
//     console.log(data);
// });

/**
 * Creando un iterable
 */
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterable = miGenerador();

// for (const item of iterable) {
//     console.log(item);
// }

from( iterable ).subscribe( observer );