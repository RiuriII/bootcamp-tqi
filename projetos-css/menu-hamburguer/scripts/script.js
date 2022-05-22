let btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault(); //cancela o outro evento
    let nav = document.querySelector('.navbar')
    nav.classList.toggle('open')

    const open = nav.classList.contains('open')
    event.currentTarget.setAttribute('aria-expanded', open) //altera o valor do atributo do btnMobile
    if(open) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)