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

// ─── Theme ───────────────────────────────────────────────────────────────────

const THEME_KEY = 'prodesk-theme';

function readStoredTheme() {
  try { return localStorage.getItem(THEME_KEY); } catch { return null; }
}

function saveTheme(theme) {
  try { localStorage.setItem(THEME_KEY, theme); } catch { /* private mode — ignore */ }
}

function applyTheme(isDark) {
  document.documentElement.classList.toggle('theme--dark', isDark);
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.setAttribute('aria-pressed', String(isDark));
}

function resolveInitialTheme() {
  const stored = readStoredTheme();
  if (stored === 'dark' || stored === 'light') return stored === 'dark';
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

function initThemeToggle() {
  const btn = document.querySelector('.theme-toggle');

  applyTheme(resolveInitialTheme());

  on(btn, 'click', () => {
    const isDark = !document.documentElement.classList.contains('theme--dark');
    applyTheme(isDark);
    saveTheme(isDark ? 'dark' : 'light');
  });

  // Sync with OS changes only when the user hasn't made a manual choice
  window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!readStoredTheme()) applyTheme(e.matches);
  });
}

// ─── FAQ Accordion ───────────────────────────────────────────────────────────

function initFAQ() {
  const buttons = document.querySelectorAll('.faq__button');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;

    // Match initial DOM state
    panel.classList.toggle('faq__panel--open', btn.getAttribute('aria-expanded') === 'true');

    on(btn, 'click', () => {
      const opening = btn.getAttribute('aria-expanded') !== 'true';

      // Close all others first
      if (opening) {
        buttons.forEach(other => {
          if (other === btn) return;
          const otherPanel = document.getElementById(other.getAttribute('aria-controls'));
          other.setAttribute('aria-expanded', 'false');
          otherPanel?.classList.remove('faq__panel--open');
        });
      }

      btn.setAttribute('aria-expanded', String(opening));
      panel.classList.toggle('faq__panel--open', opening);
    });
  });
}

// ─── Footer year ─────────────────────────────────────────────────────────────

function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ─── Bootstrap ───────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initThemeToggle();
  initFAQ();
  initFooterYear();
});