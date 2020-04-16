import { Observer, interval, concat, of } from 'rxjs';
import { take } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const interva$ = interval(1000);

concat(
    interva$.pipe( take(3) ),
    interva$.pipe( take(4) ),
    of(1)
).subscribe( observer )
