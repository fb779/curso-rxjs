import { Observer, fromEvent, of } from 'rxjs';
import { tap, map, pluck, catchError, mergeMap, switchMap, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

// crear formulario

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

// submitBtn.type = 'button';
submitBtn.innerHTML = 'Enviar';

form.append( inputEmail, inputPass, submitBtn );

document.querySelector('body').append(form);

// Helper

const peticionHttpLogin = (userPass) =>
        ajax.post('https://reqres.in/api/login?delay=1', userPass)
            .pipe(
                pluck('response', 'token'),
                catchError( err => of('Error en el servicio'))
            )

// Streams
const submitForms$ = fromEvent( form, 'submit').pipe(
    tap( ev => ev.preventDefault() ),
    map( ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    }) ),
    // mergeMap( peticionHttpLogin ), // realiza todos los observables
    // switchMap( peticionHttpLogin ), // cancela el anterior observable y ejecuta el ultimo
    exhaustMap( peticionHttpLogin ), // solo ejecuta un observable, sin importar cuantos se lancen durante su ejecución
);


submitForms$.subscribe( observer );