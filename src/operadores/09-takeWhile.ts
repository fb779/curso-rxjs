import { Observer, fromEvent } from 'rxjs';
import { tap, first, map, takeWhile } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x,y, }) => ({ x,y })),
    // takeWhile( ({ y }) => y < 350 ) // no se emite el valor que rompe la condicion
    takeWhile( ({ y }) => y < 350, true ) // se emite el valor que rompe la condicion del takeWhile
).subscribe( observer );