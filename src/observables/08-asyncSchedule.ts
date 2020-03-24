import { Observer, asyncScheduler } from 'rxjs';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};


const saludar = () => console.log(`Hola mundo`);
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 5000);
// lo ideal es que en el tercer parametro se envien todos los datos como un abjeto
// asyncScheduler.schedule(saludar2, 2000, {});
// asyncScheduler.schedule(saludar2, 2000, 'fabian');

const subs = asyncScheduler.schedule(function(state){
    console.log('state: ',state);

    this.schedule( state + 1, 1000);
}, 2000, 0);



// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);