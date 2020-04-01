import { Observer, of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const numeros$ = of(1,1,2,2,4,6,3,1,1,2,2,2,3,3,4,5,6,7,8,9,87,3,21);

numeros$.pipe(
    distinctUntilChanged()
).subscribe(observer);

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
    distinctUntilChanged( (x, y) => x.nombre === y.nombre )
).subscribe(observer);