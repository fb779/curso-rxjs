import { Observer, interval, from, of } from 'rxjs';
import { tap, map, take, reduce, scan } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

/**
 * Corta la ejecucion del observable
 */

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(
    tap( console.log ),
    take(3)
).subscribe( observer )