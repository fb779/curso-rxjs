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
const url = `https://httpbin.org/delay/1`;

const manejaError = (err: AjaxError ) => {
    console.warn('fallo algo en esta peticion: ', err.message);
    return of({});
}

const headers = { 'mi-token': 'ABDCHS6545'},
      body = { body: 'body' };

const obsget$    = ajax.get( url, headers );
const obspost$   = ajax.post( url, body , headers );
const obsput$    = ajax.put( url, body , headers );
const obsdelete$ = ajax.delete( url, headers );

const ajax$ = ajax({
    url: url,
    method: 'GET', // GET, POST, PUT, DELETE
    headers: headers,
    body: body
})