import { Observer, fromEvent, interval } from 'rxjs';
import { mergeMap, take, switchMap } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent( document, 'click');
const interval$ = interval(1000);

click$.pipe(
    // mergeMap( () => interval$.pipe( take(10)) ),
    switchMap( () => interval$ )

).subscribe( observer );