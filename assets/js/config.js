export const SELECTORS = Object.freeze({
  reveal: '[data-js~="reveal"]',
  floatingWhatsapp: '[data-js~="floating-whatsapp"]',
  floatingWhatsappHider: '[data-js~="hide-floating-whatsapp"]',
});

export const REVEAL_SETTINGS = Object.freeze({
  // A negative bottom margin waits until the element is a little inside the viewport,
  // so the visitor actually sees the animation instead of it finishing below the fold.
  rootMargin: '0px 0px -8% 0px',
  staggerStepMs: 80,
  maxStaggerSteps: 5,
});
