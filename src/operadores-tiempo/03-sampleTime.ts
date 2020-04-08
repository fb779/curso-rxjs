import { Observer, fromEvent, asyncScheduler } from 'rxjs';
import { sampleTime, pluck, distinctUntilChanged, sample, map } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    sampleTime(2000), /* evita la ejecución de los siguientes operadores hasta completar el tiempo de la emision */
    map( ({x,y}) => ({x,y})),
).subscribe( observer );
