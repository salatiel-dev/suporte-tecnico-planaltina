import { SELECTORS } from '../config.js';
import { supportsIntersectionObserver } from './browser-support.js';

const VISIBLE_CLASS = 'whatsapp-float--visible';

const setVisible = (button, isVisible) => {
  button.classList.toggle(VISIBLE_CLASS, isVisible);
};

const updateSectionsOnScreen = (sectionsOnScreen, entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      sectionsOnScreen.add(target);
    } else {
      sectionsOnScreen.delete(target);
    }
  });
};

// Those sections already show a WhatsApp button, so a second, floating one would be noise.
const hideWhileSectionsAreOnScreen = (button, sections) => {
  const sectionsOnScreen = new Set();
  const observer = new IntersectionObserver((entries) => {
    updateSectionsOnScreen(sectionsOnScreen, entries);
    setVisible(button, sectionsOnScreen.size === 0);
  });

  sections.forEach((section) => observer.observe(section));
};

export const initFloatingWhatsapp = () => {
  const button = document.querySelector(SELECTORS.floatingWhatsapp);
  if (!button) return;

  const sections = document.querySelectorAll(SELECTORS.floatingWhatsappHider);
  if (sections.length === 0 || !supportsIntersectionObserver()) {
    setVisible(button, true);
    return;
  }

  hideWhileSectionsAreOnScreen(button, sections);
};
