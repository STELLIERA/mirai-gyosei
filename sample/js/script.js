const menuButton = document.querySelector('.header__menu-toggle');
const nav = document.querySelector('#primary-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('header__nav--open', open);
});
nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('header__nav--open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});
const backTop = document.querySelector('.back-to-top');
const updateBackTop = () => backTop?.classList.toggle('back-to-top--visible', window.scrollY > 500);
window.addEventListener('scroll', updateBackTop, { passive: true });
updateBackTop();