import { Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

// const url = `https://jsonplaceholder.typicode.com/usessssssrs`;
const url = `https://api.github.com/users?per_page=5`;

// const manejoError = (response: Response) => {
//     if ( !response.ok ){
//         throw new Error( response.statusText );
//     }
//     return response;
// }

// const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( manejoError )
//     .then( res => res.json() )
//     .then( data => console.log('data: ', data) )
//     .catch( err => console.warn( err ));


const atrapaError = (err: AjaxError ) => {
    console.warn('fallo algo en esta peticion', err.message);
    return of([]);
}

ajax( url ).pipe(
    // map( res => res.response)
    pluck('response'),
    catchError( atrapaError )
).subscribe( console.log );