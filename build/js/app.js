const boton = document.querySelector('.header__button');
const overylay = document.querySelector('.header__overlay');
const body  = document.querySelector('body');
const nav = document.querySelector('.nav');

boton.addEventListener('click', () => {
    const visible = nav.getAttribute('data-visible');

    if(visible === 'false') {
        nav.setAttribute('data-visible', true);
        boton.classList.add('activo');
        body.setAttribute('data-scroll', false);
        overylay.classList.add('activo');
    } else {
        nav.setAttribute('data-visible', false);
        boton.classList.remove('activo');
        body.setAttribute('data-scroll', true);
        overylay.classList.remove('activo');
    }

});