import { Observer, of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';
// import { ajax } from 'rxjs/ajax';
// import { GithubUsersResp } from './interfaces/github-users.interface';
// import { GithubUser } from './interfaces/github-user.interface';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const letras$ = of('a','b','c');

letras$.pipe(
    mergeMap( (letra)=> interval(1000).pipe(
        map( i => `${ letra} - ${ i }`  ),
        take(3)
    ) )
)//.subscribe( observer );

const mousedown$ = fromEvent<MouseEvent>( document, 'mousedown');
const mouseup$ = fromEvent( document, 'mouseup');
const interva$ = interval();

mousedown$.pipe(
    mergeMap(() => interva$.pipe(
        takeUntil( mouseup$ )
    )  )
).subscribe( observer );