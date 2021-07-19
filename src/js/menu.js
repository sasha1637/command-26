(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mobile-menu'),
    // hero: document.querySelector('.hero'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // document.body.classList.toggle('backdrop');
    document.body.classList.toggle('menu-open');
    refs.menu.classList.toggle('is--hidden');
    // refs.hero.classList.toggle('backdrop');
  }
})();
