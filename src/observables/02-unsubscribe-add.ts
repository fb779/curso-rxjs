import { Observable, Observer } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const intervalo = new Observable<number>( sub => {
    // crear un contador para segundos
    let val = 0;

    const inter = setInterval(()=>{
        sub.next( val++ );
    }, 1000);

    setTimeout( ()=>{
        sub.complete();
    }, 3000);



    return () =>{
        clearInterval( inter );
        console.log('Intervalo destruido');
    }
});


const sub1 = intervalo.subscribe( observer );
const sub2 = intervalo.subscribe( observer );
const sub3 = intervalo.subscribe( observer );

sub1.add ( sub2 ).add( sub3 );

setTimeout(( ) =>{
    sub1.unsubscribe();
    // sub2.unsubscribe();
    // sub3.unsubscribe();
}, 4000);
