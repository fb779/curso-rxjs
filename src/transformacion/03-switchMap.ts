import { Observer, fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, pluck, distinctUntilChanged, mergeMap, switchMap } from 'rxjs/operators';
import { GithubUsersResp } from '../interfaces/github-users.interface';
import { GithubUser } from '../interfaces/github-user.interface';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const body = document.querySelector('body');
const inputtext = document.createElement('input');
const orderList = document.createElement('ol');

const loadDataList = ( users: GithubUser[]) => {
    console.log(users);
    orderList.innerHTML = '';

    for (const user of users) {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank';

        li.append(img, anchor)
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

body.append(inputtext, orderList);

const input$ = fromEvent<KeyboardEvent>( inputtext, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    distinctUntilChanged<string>(),
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`) ),
    pluck<GithubUsersResp, GithubUser[]>('items')
); //.subscribe( loadDataList );

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck<KeyboardEvent, string>('target', 'value'),
    switchMap( texto => ajax.getJSON( url+texto ) ),
).subscribe( observer );