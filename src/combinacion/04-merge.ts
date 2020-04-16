import { Observer, fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent(document, 'click');
const keyUp$ = fromEvent(document, 'keyup');

merge(
    click$.pipe( pluck('type') ),
    keyUp$.pipe( pluck('type') )
).subscribe( console.log );