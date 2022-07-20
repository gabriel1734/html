(() => {
  let body = document.querySelector('body');
  body.classList.remove('no-js');
  body.classList.add('js');
  let btnMenu = document.querySelector('.header__btnMenu');
  btnMenu.removeAttribute('style');
  
  const menu = new Menu({
    container: '.header__nav',
    toggleBtn: '.header__btnMenu',
    widthEnabled: 1024,
  });

  const carousel = new Carousel({
    container: '.laptop-slider .slideshow',
    itens: 'figure',
    btnPrev: '.prev',
    btnNext: '.next',
  });

  const carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next',
  })
})();
