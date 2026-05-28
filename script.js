/* ── Mobile nav toggle ──────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    }
  });
}

/* ── Nav background on scroll ───────────────────── */
const nav = document.getElementById('siteNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(15,15,15,0.98)'
      : 'rgba(15,15,15,0.95)';
  }, { passive: true });
}

/* ── Active nav link ────────────────────────────── */
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#navLinks a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
