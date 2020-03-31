import { Observer, range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

range(20,10).pipe(
    filter( (item, i) => {
        // console.log('index', i);
        return item%2===1
    } )
).subscribe( observer )

interface Personaje {
    tipo: String;
    nombre: String;
}

const personajes: Personaje[] = [
    {
        nombre: 'Batman',
        tipo: 'heroe'
    },
    {
        nombre: 'Joker',
        tipo: 'villano'
    },
    {
        nombre: 'Superman',
        tipo: 'heroe'
    },
    {
        nombre: 'Defpull',
        tipo: 'villano'
    },
]

const heroes$ = from(personajes).pipe(
    filter((el) => el.tipo === 'heroe' )
);

const villanos$ = from(personajes).pipe(
    filter((el) => el.tipo === 'villano' )
);

heroes$.subscribe( observer );
villanos$.subscribe( observer );

/**
 * Encadenamiento de operaciones
 */
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( ev => ev.code ),
    filter( key => key === 'Enter' )
);

keyup$.subscribe( console.log );