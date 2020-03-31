import { Observer, interval, from } from 'rxjs';
import { tap, map, take, reduce, scan } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const totalAcumulado = ( acumulador: number, valorActual: number ) =>  acumulador + valorActual ;

const number = [1,2,3,4,5];

const emisor$ = from(number);

// Reduce
emisor$.pipe(
    reduce( totalAcumulado, 0)
).subscribe( console.log )

// Scan
emisor$.pipe(
    scan( totalAcumulado, 0 )
).subscribe( console.log );

// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const users: Usuario[] = [
    {id: 'nel', autenticado: false, token: null},
    {id: 'nel', autenticado: true, token: 'ABCD'},
    {id: 'nel', autenticado: true, token: 'ABCDE1231'}
];

const state$ = from( users ).pipe(
    scan<Usuario>( (acc, curr) => {
        return {...acc, ...curr};
    }, {edad:33})
);

state$.pipe(
    map( user => user.id )
).subscribe( console.log );