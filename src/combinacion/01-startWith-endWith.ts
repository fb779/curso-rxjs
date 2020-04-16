import { Observer, of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const numeros$ = of(1,2,3);

numeros$.pipe(
    startWith('a','b','c'), // inicia una emicion con el valor designado
    endWith('x','y','z') // emite el valor antes de terminar la subscripcion
).subscribe(observer);