import { Observer, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const GITHUB_API_URL = `https://api.github.com/users`;
const GITHUB_USER = `fb779`;

forkJoin({
    usuario: ajax.getJSON(`${ GITHUB_API_URL}/${ GITHUB_USER}`).pipe(
        catchError( ()=> of({}))
    ),
    repos: ajax.getJSON(`${ GITHUB_API_URL}/${ GITHUB_USER}/repos`).pipe(
        catchError( ()=> of([]))
    ),
    gist: ajax.getJSON(`${ GITHUB_API_URL}/${ GITHUB_USER}/gists`).pipe(
        catchError( ()=> of([]))
    ),
}).pipe(
    catchError( err => of( err ))
).subscribe( console.log )