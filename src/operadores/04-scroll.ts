import { range, map, fromEvent, filter, from, tap } from 'rxjs';

const texto = document.createElement('div');

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed lacus finibus, placerat mauris nec, convallis dui. Aliquam congue laoreet ante vel scelerisque. Donec eget metus et justo gravida pulvinar. Aliquam erat volutpat. Nulla pulvinar sed libero ut posuere. Sed feugiat eget odio eu sollicitudin. Proin egestas ipsum ut tortor ornare sagittis. Phasellus in neque sem.
<br/><br/>
Pellentesque luctus est nec posuere convallis. Duis nisi elit, interdum in enim convallis, dictum rhoncus nibh. Suspendisse ultrices, lectus et tristique volutpat, ipsum tellus semper neque, sed iaculis nulla nisl vitae ex. Sed tellus ex, blandit eu ligula eleifend, ullamcorper facilisis eros. Vivamus mollis ante tellus, eu scelerisque est malesuada aliquet. Phasellus id aliquam mi. Sed non blandit risus. Morbi posuere laoreet tristique. Sed vitae mauris pretium, elementum risus tincidunt, dignissim tortor. Suspendisse in viverra ligula, sed consectetur odio. Vestibulum varius tellus est, vitae dapibus metus placerat a. In eleifend est lectus, nec volutpat arcu placerat vitae. Donec urna purus, elementum a risus quis, feugiat faucibus tortor.
<br/><br/>
Ut tincidunt efficitur magna, vitae auctor ipsum faucibus ac. Proin at quam ut turpis commodo auctor. Sed et eros nec erat tincidunt malesuada sit amet ac leo. Mauris vehicula ipsum quis quam facilisis fermentum. Ut congue consectetur justo non vestibulum. Aenean gravida pharetra tortor, sit amet dictum odio luctus et. Aenean facilisis, lectus id lacinia rutrum, tortor nisi aliquet arcu, eu finibus eros ipsum ut erat. Morbi eu urna sit amet lacus tincidunt facilisis. In vitae nunc quis tortor dictum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor faucibus ante at hendrerit. Pellentesque nec cursus nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus luctus blandit arcu sit amet gravida. Cras varius dui odio, et placerat neque iaculis in.
<br/><br/>
Donec sed bibendum tortor, non viverra metus. Morbi at elit bibendum, feugiat enim et, consequat eros. Nullam consectetur metus eu mi fringilla luctus. Etiam egestas nisi sed dolor tempor, eu tempor eros condimentum. Nam hendrerit molestie ligula, id scelerisque lacus mattis ut. Donec commodo erat ac molestie vulputate. Duis consectetur efficitur tortor, ut euismod neque hendrerit sit amet. Integer eu massa ligula. Nunc sodales nec dolor eget auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse nulla felis, porttitor eu metus vel, lacinia suscipit lorem. Sed faucibus nisi at arcu gravida, sed aliquet augue imperdiet.
<br/><br/>
Nulla luctus pellentesque lacus, eget eleifend risus consequat ut. Suspendisse at eros convallis, vestibulum quam nec, maximus nulla. Curabitur semper mauris at risus mattis, eget lacinia sem ornare. Mauris ac urna elit. Maecenas suscipit efficitur blandit. Sed pretium eget eros vitae ornare. Donec malesuada felis vel libero faucibus, eget lobortis sapien iaculis. Phasellus sollicitudin eros nunc, finibus vulputate est finibus non. Proin urna felis, malesuada auctor faucibus in, iaculis et orci. Fusce blandit ipsum ut erat iaculis, quis condimentum nibh luctus. Suspendisse dignissim euismod ante, non mattis magna commodo sit amet. Vestibulum efficitur sollicitudin purus, a ultricies libero aliquet ac. Etiam in feugiat ante. Aliquam purus dui, tempus quis malesuada nec, ultrices quis sem. Aenean sit amet porttitor purus.`

const body = document.querySelector('body');
body.appendChild(texto);

const progessBar = document.createElement('div');
progessBar.setAttribute('class','progress-bar')
body.appendChild(progessBar)

// Funcion calculo
const calcularPorcentajeScroll = (event) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll')
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap(console.log)
)

progress$.subscribe(porcentaje => {
    progessBar.style.width = `${ porcentaje}%`
})







