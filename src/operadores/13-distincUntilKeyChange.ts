import { Observer, of, from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


interface personaje {
    nombre: string;
}

const personajes: personaje[] = [
    { nombre: 'iron man'},
    { nombre: 'super man'},
    { nombre: 'megaman'},
    { nombre: 'iron man'},
    { nombre: 'thor'},
    { nombre: 'doctor nefario'},
    { nombre: 'grud'},
    { nombre: 'iron man'},
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(observer);