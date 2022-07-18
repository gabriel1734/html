(() => {
  let body = document.querySelector('body');
  body.classList.remove('no-js');
  body.classList.add('js');
  let btnMenu = document.querySelector('.header__btnMenu');
  btnMenu.removeAttribute('style');
  const menu = new Menu({
    container: 'header__nav',
    togleBtn: 'header__btnMenu',
    widthEnabled: 1024,
  });
})();
