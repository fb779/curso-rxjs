import { Observer, interval } from 'rxjs';
import { tap, map, take, reduce } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const number = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = number.reduce( totalReducer, 0 );
console.log('total reducer',total);

interval(500).pipe(
    take(6),
    tap( console.log ),
    reduce( totalReducer )
    // reduce( totalReducer, 0 )
).subscribe(observer);