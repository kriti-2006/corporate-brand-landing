// Small helper — safely attaches a listener only when the element exists
function on(el, event, fn) {
  if (el) el.addEventListener(event, fn);
}

// ─── Navigation ──────────────────────────────────────────────────────────────

function initNav() {
  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.querySelector('.nav__menu');

  if (!toggle || !menu) return;

  function openMenu() {
    menu.classList.add('nav__menu--open');
    toggle.classList.add('nav__toggle--open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('nav__menu--open');
    toggle.classList.remove('nav__toggle--open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  on(toggle, 'click', () => {
    menu.classList.contains('nav__menu--open') ? closeMenu() : openMenu();
  });

  // Close when a link is tapped on mobile
  document.querySelectorAll('.nav__link').forEach(link => {
    on(link, 'click', () => { if (window.innerWidth < 768) closeMenu(); });
  });

  // Reset on resize to desktop
  window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); });
}
