import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();
/**
 * elemento que define el comportamiento del observable
 * sus metodos por defecto son
 * next
 * error
 * complete
 **/
const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const obs$ = new Observable<string>( sub => {
    sub.next( 'Hola' )
    sub.next( 'numdo' )

    let a = undefined;
    a.nombre = 'texto';

    sub.complete;

    sub.next( 'Hola' )
    sub.next( 'numdo' )
});

obs$.subscribe( observer );

// obs$.subscribe(
//     value => console.log('next:',value),
//     error => console.warn('error:',error),
//     () => console.log('complete')
// );