import { Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

// const url = `https://jsonplaceholder.typicode.com/users`;
// const url = `https://api.github.com/users?per_page=5`;
const url = `https://httpbin.org/delay/1`;

const atrapaError = (err: AjaxError ) => {
    console.warn('fallo algo en esta peticion', err.message);
    return of([]);
}

const obs$ = ajax.getJSON( url ).pipe(
    // map( res => res.response)
    // pluck('response'),
    // catchError( atrapaError )
).subscribe( console.log );