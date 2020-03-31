import { Observer, fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const observer:  Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, massa congue laoreet imperdiet, enim sapien facilisis mauris, et scelerisque purus eros et eros. Proin ut justo vel ante lobortis rutrum. Ut et sapien nec metus fringilla auctor at et mi. Pellentesque non velit sodales, consectetur elit ut, porta dolor. Cras aliquet ac tellus vel ullamcorper. Nullam sed condimentum ligula. Nunc auctor purus lacinia, faucibus mi eu, euismod diam.
<br/><br/>
Nam aliquet commodo libero id finibus. Sed ac tincidunt quam. Sed lacinia porta urna, sit amet pellentesque eros fringilla vitae. Vivamus ligula neque, venenatis vitae mauris a, sollicitudin dignissim tortor. Donec tempor suscipit purus, ac facilisis risus condimentum ut. Praesent mauris quam, maximus ut placerat quis, congue a odio. Fusce ipsum eros, consequat vitae lorem eget, convallis fermentum justo. Vivamus et erat tellus. Integer id porta quam.
<br/><br/>
Suspendisse potenti. Phasellus lacinia ante non eros accumsan malesuada. Integer ut odio nec neque maximus fringilla eget ac libero. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam facilisis dignissim justo, nec iaculis ipsum accumsan id. Nullam bibendum, eros sit amet dapibus molestie, mauris purus accumsan libero, suscipit condimentum sem ipsum non sapien. Fusce quis dapibus arcu, eget placerat lectus. Curabitur auctor tempor erat, tempus accumsan felis consectetur elementum. Nunc volutpat, sem ac aliquet sagittis, massa nunc lobortis lectus, ut fringilla ipsum nisi in purus.
<br/><br/>
Fusce dui massa, aliquet nec lectus id, ullamcorper suscipit nisi. Integer non sapien leo. Fusce at justo non nunc aliquet tempus quis in ligula. Nulla facilisi. Curabitur tempor feugiat pulvinar. Integer pretium feugiat erat, vel aliquet metus eleifend et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam et eros vitae nisl eleifend dapibus. Vivamus dignissim est nec ipsum dictum, in ornare massa tristique. Maecenas nec tellus dui. Sed vitae dolor sagittis turpis ultrices blandit nec non velit. Nulla facilisi.
<br/><br/>
Curabitur vitae fringilla lectus. Vestibulum vel faucibus augue. Nunc luctus sapien vitae ex pellentesque, ut pellentesque elit rhoncus. Donec tincidunt erat eu dictum faucibus. Sed vulputate egestas turpis id fermentum. Suspendisse potenti. Integer sit amet purus sed augue consectetur suscipit. Integer aliquet et ipsum ac ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. In viverra leo ac dolor hendrerit, sed scelerisque ex elementum.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique, massa congue laoreet imperdiet, enim sapien facilisis mauris, et scelerisque purus eros et eros. Proin ut justo vel ante lobortis rutrum. Ut et sapien nec metus fringilla auctor at et mi. Pellentesque non velit sodales, consectetur elit ut, porta dolor. Cras aliquet ac tellus vel ullamcorper. Nullam sed condimentum ligula. Nunc auctor purus lacinia, faucibus mi eu, euismod diam.
<br/><br/>
Nam aliquet commodo libero id finibus. Sed ac tincidunt quam. Sed lacinia porta urna, sit amet pellentesque eros fringilla vitae. Vivamus ligula neque, venenatis vitae mauris a, sollicitudin dignissim tortor. Donec tempor suscipit purus, ac facilisis risus condimentum ut. Praesent mauris quam, maximus ut placerat quis, congue a odio. Fusce ipsum eros, consequat vitae lorem eget, convallis fermentum justo. Vivamus et erat tellus. Integer id porta quam.
<br/><br/>
Suspendisse potenti. Phasellus lacinia ante non eros accumsan malesuada. Integer ut odio nec neque maximus fringilla eget ac libero. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam facilisis dignissim justo, nec iaculis ipsum accumsan id. Nullam bibendum, eros sit amet dapibus molestie, mauris purus accumsan libero, suscipit condimentum sem ipsum non sapien. Fusce quis dapibus arcu, eget placerat lectus. Curabitur auctor tempor erat, tempus accumsan felis consectetur elementum. Nunc volutpat, sem ac aliquet sagittis, massa nunc lobortis lectus, ut fringilla ipsum nisi in purus.
<br/><br/>
Fusce dui massa, aliquet nec lectus id, ullamcorper suscipit nisi. Integer non sapien leo. Fusce at justo non nunc aliquet tempus quis in ligula. Nulla facilisi. Curabitur tempor feugiat pulvinar. Integer pretium feugiat erat, vel aliquet metus eleifend et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam et eros vitae nisl eleifend dapibus. Vivamus dignissim est nec ipsum dictum, in ornare massa tristique. Maecenas nec tellus dui. Sed vitae dolor sagittis turpis ultrices blandit nec non velit. Nulla facilisi.
<br/><br/>
Curabitur vitae fringilla lectus. Vestibulum vel faucibus augue. Nunc luctus sapien vitae ex pellentesque, ut pellentesque elit rhoncus. Donec tincidunt erat eu dictum faucibus. Sed vulputate egestas turpis id fermentum. Suspendisse potenti. Integer sit amet purus sed augue consectetur suscipit. Integer aliquet et ipsum ac ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. In viverra leo ac dolor hendrerit, sed scelerisque ex elementum.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');

progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

// funcion para hacer el calculo

const calcularScroll = (event: any) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // return Math.round( ( scrollTop / ( scrollHeight - clientHeight ) ) * 100 );
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100 ;
}

// streeams
const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(
    // map ( event => calcularScroll(event) )
    map ( calcularScroll ),
    tap( console.log )
);

progress$.subscribe( (porcentaje) => {
    console.log(porcentaje);
    progressBar.style.width = `${ porcentaje }%`;
});