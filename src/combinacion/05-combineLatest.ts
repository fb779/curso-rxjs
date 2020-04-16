import { Observer, fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const click$ = fromEvent(document, 'click');
const keyUp$ = fromEvent(document, 'keyup');

combineLatest(
    click$.pipe( pluck('type') ),
    keyUp$.pipe( pluck('type') )
); // .subscribe( console.log );

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '******';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputStream = ( elem: HTMLElement) => {
    return fromEvent( elem, 'keyup' ).pipe(
        pluck('target', 'value')
    )
}

combineLatest(
    getInputStream( input1 ),
    getInputStream( input2 ),
).subscribe( console.log )