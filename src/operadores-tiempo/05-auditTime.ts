import { Observer, fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    map( ({ x, y }) => ({x,y})),
    tap( valor => console.log('Tap values', valor) ),
    auditTime(2000)
).subscribe( observer );
