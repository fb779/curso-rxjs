import { Observer, interval, fromEvent } from 'rxjs';
import { take, takeUntil, skip, tap } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const boton = document.createElement('button');
boton.innerHTML = 'Detener el timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap(()=> console.log('antes del skip')),
    skip(2),
    tap(()=> console.log('despues del skip')),
);


counter$.pipe(
    takeUntil(clickBtn$)
    // take(10),
).subscribe( observer );
