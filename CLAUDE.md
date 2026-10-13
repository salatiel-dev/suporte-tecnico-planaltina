# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static single-page landing page (pt-BR) for Salatiel Barros, an IT support technician in Planaltina-GO. It is plain HTML, CSS and ES modules, with no build step, package manager, linter or test suite. `README.md` is a short, professional summary in Portuguese with only four parts: audience, technologies, structure and license. Don't add how-to or guide sections to it. The places where duplicated content lives are listed at the end of this file.

The owner's name is always "Salatiel Barros", everywhere: page, docs, alt text and git commit author. Never use the full name.

**Run it through an HTTP server** (Live Server, `npx serve .`, or `python -m http.server`). ES modules don't load from `file://`, so opening the file directly silently drops the scroll animations and the floating WhatsApp button. To verify changes visually, drive headless Chrome over the DevTools protocol and wait for `document.fonts.ready` (Node 24 has a global `WebSocket`). Plain `--screenshot` runs load Google Fonts unreliably and can't emulate widths below about 500px.

## Structure and conventions

- `index.html` holds content only. No inline `<style>`, `<script>` (except the JSON-LD data block, which Google requires inline), `style=` or `on*=` attributes.
- Code is in English. Visitor-facing text is in Portuguese. The owner wants no comments in HTML, CSS or JS. Put explanations in your reply, not in the code. `.gitignore` keeps its comments.
- Owner-supplied content that hasn't been filled in yet goes in visible text marked `[SUBSTITUIR]`, or you ask the owner. Never invent real values for statistics, the domain, etc. Never write testimonials. The owner removed that section until real ones exist, so add it back only with texts the owner supplies. Business claims (prices, free diagnosis, warranty, service area) come from the owner. Don't reword them into stronger promises.

### CSS (`assets/css/`, loaded in this order)

- `base.css`: every design token lives in `:root` (colors, translucent variants derived with `color-mix()`, spacing `--space-N` where N × 0.25rem, radii, shadows, type scale, motion, icons as SVG data URIs), plus the reset and typography. Use tokens, not literals, for any repeated value.
- `layout.css`: `.container`, `.section` (with `--surface` and `--accent` modifiers) and page-region blocks (hero, stats, about, faq, contact-card, footer).
- `components.css`: reusable blocks (button, whatsapp-float, card, service-card, business, steps, faq-item, device illustration…) and `@keyframes`.
- `responsive.css`: all media queries. Base styles are mobile-first, `40rem` is tablet, `60rem` is desktop. Each breakpoint appears exactly once, so add overrides to the existing block.
- BEM class names in English. No IDs in selectors, no `!important`, at most 3 levels per selector.
- Icons are `mask`ed pseudo-elements painted with `currentColor`. Add new ones to the shared icon rule at the top of `components.css` and set `--icon` on the pseudo-element.
- Context is passed through inherited custom properties rather than descendant selectors: `--focus-color` (white focus ring on dark areas), `--title-bar-color` (section title underline).
- Reduced motion works by zeroing the motion tokens (`--duration-*`, `--motion-*`) in `responsive.css`. Use those tokens for any new transition or hover movement, and they'll respect the user's setting automatically.

### JavaScript (`assets/js/`)

- `main.js` imports and runs each `init*` function from `modules/`. Selectors and tunables live in `config.js`. CSS state class names are constants inside the module that toggles them.
- Elements are selected with `data-js` attributes (`[data-js~="name"]`, space-separated when an element has several hooks), never with styling classes. Every `init*` guards against missing elements and missing `IntersectionObserver`.
- **Scroll reveal:** add `data-js="reveal"` to a block. JS adds `.reveal` (hidden) only at runtime, so content stays visible without JS, then adds `.reveal--visible`. Don't put it on above-the-fold content.
- **Floating button:** hidden by default in CSS and shown by JS (`.whatsapp-float--visible`) while no element marked `data-js="hide-floating-whatsapp"` (hero, contact section, footer) is on screen.

## Content that is duplicated

There's no templating, so the WhatsApp link (`https://wa.me/5561994393661?text=…`) is repeated in 6 anchors. The phone number also appears in the contact button text, the footer `tel:` link, the JSON-LD `telephone` and `assets/img/whatsapp-qr.png`. The e-mail address appears only in the footer `<address>`. The owner doesn't want it in meta tags, the JSON-LD or anywhere else. Business hours, city and service areas are repeated across the copy, the meta and Open Graph tags, and the JSON-LD. Change them everywhere together. The site URL (GitHub Pages, `https://salatiel-dev.github.io/suporte-tecnico-planaltina/`) is in the canonical link, `og:url`, `og:image`, the JSON-LD `url` and `image`, and `sitemap.xml`. The share image is the about photo until the owner supplies a 1200 × 630 `og-image.jpg`. `theme-color` in `<head>` duplicates `--color-ink`.
