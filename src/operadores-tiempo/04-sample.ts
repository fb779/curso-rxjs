import { Observer, fromEvent, interval } from 'rxjs';
import { sample, tap } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const interval$ = interval(500);

const click$ = fromEvent<MouseEvent>(document, 'click')

interval$.pipe(
    sample(click$)
).subscribe( observer );
