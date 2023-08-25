const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight) {
        header.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px'; // Sombra de caixa desejada
    } else {
        header.style.boxShadow = 'none';
    }
});

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
  }
});
