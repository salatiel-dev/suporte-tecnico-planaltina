import { REVEAL_SETTINGS, SELECTORS } from '../config.js';
import { supportsIntersectionObserver } from './browser-support.js';

const PENDING_CLASS = 'reveal';
const VISIBLE_CLASS = 'reveal--visible';
const DELAY_PROPERTY = '--reveal-delay';

const getStaggerDelay = (order) => {
  const step = Math.min(order, REVEAL_SETTINGS.maxStaggerSteps);
  return `${step * REVEAL_SETTINGS.staggerStepMs}ms`;
};

const revealElement = (element, order) => {
  element.style.setProperty(DELAY_PROPERTY, getStaggerDelay(order));
  element.classList.add(VISIBLE_CLASS);
};

const handleIntersections = (entries, observer) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry, order) => {
      revealElement(entry.target, order);
      observer.unobserve(entry.target);
    });
};

export const initScrollReveal = () => {
  const elements = document.querySelectorAll(SELECTORS.reveal);
  if (elements.length === 0 || !supportsIntersectionObserver()) return;

  const observer = new IntersectionObserver(handleIntersections, {
    rootMargin: REVEAL_SETTINGS.rootMargin,
  });

  elements.forEach((element) => {
    element.classList.add(PENDING_CLASS);
    observer.observe(element);
  });
};
