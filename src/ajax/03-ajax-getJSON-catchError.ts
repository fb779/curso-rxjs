import { Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

// const url = `https://jsonplaceholder.typicode.com/users`;
// const url = `https://api.github.com/users?per_page=5`;
const url = `https://httpbin.org/delsay/3`;

const manejaError = (err: AjaxError ) => {
    console.warn('fallo algo en esta peticion: ', err.message);
    return of({});
}

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

obs2$.pipe().subscribe( observer );

obs$.pipe(
    catchError( manejaError )
).subscribe( observer );