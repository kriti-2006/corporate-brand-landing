// =========================================================================
// 0. UTILITIES
// =========================================================================

/**
 * Safely adds an event listener if the element exists.
 * Helps avoid errors when querying optional elements.
 */
function on(element, event, handler) {
  if (!element) return;
  element.addEventListener(event, handler);
}

// =========================================================================
// 1. NAVIGATION: MOBILE TOGGLE & RESPONSIVE BEHAVIOR
// =========================================================================

function initNav() {
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');

  if (!navToggle || !navMenu) return;

  const MOBILE_BREAKPOINT = 768;

  function openMenu() {
    navMenu.classList.add('nav__menu--open');
    navToggle.classList.add('nav__toggle--open');
    navToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navMenu.classList.remove('nav__menu--open');
    navToggle.classList.remove('nav__toggle--open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('nav__menu--open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle on button click
  on(navToggle, 'click', toggleMenu);

  // Close menu when a nav link is clicked (on mobile)
  navLinks.forEach((link) => {
    on(link, 'click', () => {
      if (window.innerWidth < MOBILE_BREAKPOINT) {
        closeMenu();
      }
    });
  });

  // Close menu if window is resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      closeMenu();
    }
  });
}

// =========================================================================
// 2. THEME TOGGLE: DARK / LIGHT MODE WITH PERSISTENCE
// =========================================================================

const THEME_STORAGE_KEY = 'prodesk-theme';

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // If storage fails (private mode), do nothing
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');

  if (theme === 'dark') {
    root.classList.add('theme--dark');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', 'true');
    }
  } else {
    root.classList.remove('theme--dark');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', 'false');
    }
  }
}

function detectPreferredTheme() {
  const stored = getStoredTheme();
  if (stored === 'dark' || stored === 'light') {
    return stored;
  }
  // Fallback to prefers-color-scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');

  const initialTheme = detectPreferredTheme();
  applyTheme(initialTheme);

  on(themeToggle, 'click', () => {
    const isDark = document.documentElement.classList.toggle('theme--dark');
    const theme = isDark ? 'dark' : 'light';
    applyTheme(theme);
    storeTheme(theme);
  });
}

// =========================================================================
// 3. FAQ ACCORDION: ACCESSIBLE TOGGLE
// =========================================================================

function initFAQ() {
  const faqButtons = document.querySelectorAll('.faq__button');

  if (!faqButtons.length) return;

  faqButtons.forEach((button) => {
    const panelId = button.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    // Ensure initial state matches aria-expanded (default false)
    panel.classList.toggle('faq__panel--open', button.getAttribute('aria-expanded') === 'true');

    on(button, 'click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      // Optional behavior: close others when one opens
      if (newState) {
        faqButtons.forEach((otherButton) => {
          if (otherButton !== button) {
            const otherPanelId = otherButton.getAttribute('aria-controls');
            const otherPanel = document.getElementById(otherPanelId);
            if (!otherPanel) return;
            otherButton.setAttribute('aria-expanded', 'false');
            otherPanel.classList.remove('faq__panel--open');
          }
        });
      }

      button.setAttribute('aria-expanded', String(newState));
      panel.classList.toggle('faq__panel--open', newState);
    });
  });
}

// =========================================================================
// 4. FOOTER YEAR HELPER
// =========================================================================

function initFooterYear() {
  const footerYear = document.getElementById('footer-year');
  if (!footerYear) return;
  const year = new Date().getFullYear();
  footerYear.textContent = String(year);
}

// =========================================================================
// 5. INIT
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initThemeToggle();
  initFAQ();
  initFooterYear();
});