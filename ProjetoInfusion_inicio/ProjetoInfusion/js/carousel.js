class Carousel{
  constructor(config) {
    this.container = typeof config.container === 'string' ?
      document.querySelector(config.container) : config.container;
    this.itens = typeof config.itens === 'string' ?
      this.container.querySelectorAll(config.itens) : config.itens;
    
    this.btnPrev = typeof config.btnPrev === 'string' ?
      document.querySelector(config.btnPrev) : config.btnPrev;
    this.btnNext = typeof config.btnNext === 'string' ?
      document.querySelector(config.btnNext) : config.btnNext;
    
    let _this = this
    let current = 0;
    
    init();

    function init() {
      let show = _this.container.querySelectorAll('.show');

      Array.prototype.forEach.call(show, sh => {
        sh.classList.remove('show');
      });
      _this.itens[0].classList.add('show');
      _this.btnNext.removeAttribute('style');
      _this.btnPrev.removeAttribute('style');

      addListeners();
    }
    function addListeners() {
      _this.btnNext.addEventListener('click', showNext);
      _this.btnPrev.addEventListener('click', showPrev);
    }

    function showNext() {
      current++;
      showSlide();
    }
    function showPrev() {
      current--;
      showSlide();
    }
    function showSlide() {
      let qtd = _this.itens.length;
      let slide = current % qtd;
      slide = Math.abs(slide);
      
      _this.container.querySelector('.show').classList.remove('show');
      _this.itens[slide].classList.add('show');
    }
  }
}