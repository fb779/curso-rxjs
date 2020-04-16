import { Observer } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando.....';

const body = document.querySelector('body');

ajax.getJSON(`https://reqres.in/api/users/4?delay=3`).pipe(
    startWith( true ),
).subscribe( res => {
    console.log(res);
    if ( res === true ){
        body.append(loadingDiv);
    } else {
        document.querySelector('div.loading').remove();
    }
})