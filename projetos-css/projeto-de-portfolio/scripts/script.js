let btnMenu = document.querySelector('.btn-menu')
let menuOptions = document.querySelectorAll('#menu a')
let nav = document.querySelector('.navbar')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault(); 
    nav.classList.toggle('open')
    const open = nav.classList.contains('open')
    event.currentTarget.setAttribute('aria-expanded', open) 
    if(open) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }

}

for (const option of menuOptions) {
    option.addEventListener('click', () => {
        console.log('link ativo');
        nav.classList.remove('open')
    });
}

btnMenu.addEventListener('touchstart', toggleMenu)
btnMenu.addEventListener('click', toggleMenu)

window.addEventListener('scroll', () => {
    if(window.scrollY >= 500) {
        nav.classList.add('change-color')
    } else {
        nav.classList.remove('change-color')
    }
})

// animação de scroll
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args);
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args);
    }
}

const target = document.querySelectorAll('[data-anime]')
const classAdd = 'animate'

function animateScroll() {
    const windowTop = window.pageYOffset * 1.4

    target.forEach( function(element) {
        if(windowTop > element.offsetTop) {
            element.classList.add(classAdd)
        } else {
            element.classList.remove(classAdd)
        }
    })

}

animateScroll()

if(target.length) {
    window.addEventListener('scroll', debounce(() => {
        animateScroll()
    }, 200))
}
