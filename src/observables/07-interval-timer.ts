import { Observer, interval, timer } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const interval$ = interval(1000);
// console.log('inicio');
// interval$.subscribe( observer );
// console.log('fin');

// const timer$ = timer(3000);
// const timer$ = timer(5000, 3000);

const hoyen5 = new Date();
hoyen5.setSeconds( hoyen5.getSeconds() + 5);
const timer$ = timer(hoyen5 );


console.log('inicio');
timer$.subscribe( observer );
console.log('fin');