import { of } from 'rxjs';


// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6]);
const obs$ = of([1,2], 'string', null, true, { name: 'algo'}, () => { console.log('mensaje') } );

console.log('Inicio');
obs$.subscribe(
    next => console.log('Next: ',next),
    error => console.log('error: ', error),
    () => console.log('completado')
)

console.log('Fin');