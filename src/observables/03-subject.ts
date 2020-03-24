import { Observable, Observer, Subject } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const intervalo$ = new Observable<number>( sub => {
    let interval = setInterval( () => sub.next( Math.random() ), 1000 );

    return () => {
        clearInterval( interval )
        console.log('intervalo destruido');
    }
});

// const sub1 = intervalo.subscribe( (rnd) => console.log('sub1', rnd) );
// const sub2 = intervalo.subscribe( (rnd) => console.log('sub2', rnd) );

/**
 *  1 - casteo multiple
 *  2 - tambien es un observer
 *  3 - tambien utiliza los metodos next, error y complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );

const sub1 = subject$.subscribe( (rnd) => console.log('sub1', rnd) );
const sub2 = subject$.subscribe( (rnd) => console.log('sub2', rnd) );


setTimeout( ()=>{
    subject$.next( 10 );
    subject$.complete();
    subscription.unsubscribe();
}, 4000 );