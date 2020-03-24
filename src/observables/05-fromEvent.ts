import { Observer, fromEvent } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');
const src3$ = fromEvent( document, 'keypress');
const src4$ = fromEvent<MouseEvent>( document, 'mouseMove');


// src1$.subscribe( ev => {
//     console.log('Coordenada x: ',ev.x);
//     console.log('Coordenada y: ',ev.y);
// } );

// valores de respuesta desestructurada
src1$.subscribe( ({x,y}) => {
    console.log('Coordenada x: ',x);
    console.log('Coordenada y: ',y);
} );

src2$.subscribe( ( e )=>{
    console.log( e.key );
});
// src3$.subscribe( observer );