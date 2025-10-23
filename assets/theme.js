(function () {
  if (document.documentElement.classList.contains('no-js')) {
    document.documentElement.classList.remove('no-js');
  }

  if (document.body && document.body.classList.contains('no-js')) {
    document.body.classList.remove('no-js');
  }

  const navToggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
})();
