class Menu {
  constructor(config) {

    this.nav = typeof config.container === 'string' ?
      document.querySelector(config.container) : config.container;
    
    this.btn = typeof config.toggleBtn === 'string' ?
      document.querySelector(config.toggleBtn) : config.toggleBtn;
    
    this.maxWidth = config.widthEnabled || false;
    
    this.nav.removeAttribute('style');
    let opened = false;
    let _this = this;
    this.btn.removeAttribute('style');
    this.btn.addEventListener('click', openOrClose);
    //closeMenu();

    if (this.maxWidth) {
      window.addEventListener('resize', e => {
        if (window.innerWidth > this.maxWidth) {
          this.nav.removeAttribute('style');
          opened = true;
        } else if(!this.nav.getAttribute('style')) {
          closeMenu();
        }
      });
      if(window.innerWidth <= this.maxWidth) {
        closeMenu();
      }
    }

    function openOrClose() {
      if (!opened) {
        openMenu();
      } else {
        closeMenu();
      }
    }
    function openMenu() {
      let top = _this.nav.getBoundingClientRect().top + 'px';

      let _style = {
        maxHeight: `calc(100vh - ${top})`,
        overflow: 'hidden',
      };
      applyStyleToNav(_style);
      opened = true;
    }
    function applyStyleToNav(_style) {
      Object.keys(_style).forEach(stl => {
        _this.nav.style[stl] = _style[stl];
      });
    }
    function closeMenu() {
      let top = _this.nav.getBoundingClientRect().top + 'px';

      let _style = {
        maxHeight: '0px',
        overflow: 'hidden',
      };
      applyStyleToNav(_style);

      opened = false;
    }
  }
}