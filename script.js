document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');

  // Mobile menu
  const setMenu = (open) => {
    links.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    toggle.querySelector('i').className = open ? 'fas fa-xmark' : 'fas fa-bars';
  };
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('active')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  // Nav border on scroll + active link highlight
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = links.querySelectorAll('a:not(.nav-cta)');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 160) current = s.id; });
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});