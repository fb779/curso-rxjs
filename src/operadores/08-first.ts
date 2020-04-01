import { Observer, fromEvent } from 'rxjs';
import { tap, first, map } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    // tap<MouseEvent>( console.log ),
    map<MouseEvent, any>( ({ clientX , clientY }) => ({ clientX, clientY}) ),
    // map( event => ({ x: event.clientX, y: event.clientY })),
    first<MouseEvent>( x => x.clientY >= 250 )
).subscribe( observer );

click$.pipe(
    tap<MouseEvent>( console.log ),
    first<MouseEvent>( x => x.clientY >= 150 )
).subscribe( observer );
