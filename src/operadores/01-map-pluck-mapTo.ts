import { Observer, range, fromEvent } from 'rxjs';
import { map, pluck, tap, mapTo } from 'rxjs/operators'

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

range(1,5).pipe(
    map<number, number>( (val)=> val*10 ),
    map<number, string>( (val)=> val.toString() )
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

/**
 * permite modificar la salida de un observable
 */
const keyMap$ = keyup$.pipe(
    map( event => event.code )
);

/**
 * se debe recibir un objeto
 * permite especificar una clave del objeto obtenido el en observable
 */
const keyPluck$ = keyup$.pipe(
    // tap( console.log ),
    pluck( 'view', 'document', 'location', 'host')
);

/**
 * remplaza la salida por una salida fija
 */
const keyMapTo$ = keyup$.pipe(
    mapTo( 'hola mis amigos' ),
    mapTo( 15 )
);

keyMap$.subscribe( (dt) => console.log('Map:',dt) );
keyPluck$.subscribe( (dt) => console.log('Pluck:',dt) );
keyMapTo$.subscribe( (dt) => console.log('MapTo:',dt) );