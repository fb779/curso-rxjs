import { Observer, fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    // tap( console.log ),
    // debounceTime(3000)
    throttleTime(3000)
)//.subscribe( observer );


const input = document.createElement( 'input' );
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup');

input$.pipe(
    // map( (ev: any) => ev.target.value ),
    // throttleTime(3000),
    // throttleTime(1000, asyncScheduler, {
    //     leading: true,
    //     trailing: true
    // }),
    throttleTime(1000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log );