import { Observer, fromEvent } from 'rxjs';
import { debounceTime, tap, map, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


/**
 * DebounceTime
 */

const click$ = fromEvent(document, 'click')

click$.pipe(
    // tap( console.log ),
    debounceTime(3000)
)//.subscribe( observer );


const input = document.createElement( 'input' );
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup');

input$.pipe(
    // map( (ev: any) => ev.target.value ),
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log );