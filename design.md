# Design — aboutlogo.com

Locked design system for the marketing site. Every page reads this before changing layout or style. Amend this file when the system needs to grow; do not override per page.

## Genre
editorial

## Macrostructure family
- Marketing pages (home, services/*): Bento Grid. White hero with the price, then the package shown as illustrated tiles, pale work band, numbered step cards, pale closing band.
- Portfolio index: two-column grid with offset rows under a pale page head.
- Case, about, contact, legal: pale page head, one split below.

## Theme
Quiet modern luxury. Tokens live in `src/app/tokens.css`.
- Monochrome only: white paper, near-black ink, neutral greys. No chromatic accent anywhere, including the LINE action (black button, inverts on hover).
- Square corners, hairline rules instead of filled cards, generous whitespace.
- Colour comes only from client work. Work images sit in greyscale and ease into colour on hover (desktop) or while passing the middle of the screen (touch). The single-case page shows the image in full colour.

## Typography
- Display and body: Helvetica Neue World (Adobe Fonts kit `hvh3vlm`), weights 400 and 700 only.
- Display headings and the price are weight 400 with tight tracking. 700 is for h3, buttons and links.
- Small labels are uppercase with wide tracking (`--tracking-label`).
- No numbered eyebrows above section headings.

## Spacing
4pt named scale in `tokens.css`. Use `var(--space-*)`, never raw values.

## Motion
- Hero and page heads rise in on load (staggered). Content below the fold rises in once as it reaches the viewport (`Reveal.tsx`); nothing loops or autoplays.
- Motion is slow and quiet: fades with a few pixels of travel, no lifts, no shadows. The greyscale-to-colour change on work images takes about a second.
- Header is sticky with a blurred translucent background. FAQ answers ease open where the browser supports it.
- Easings `--ease-out`, `--ease-in`, `--ease-in-out`; reduced motion turns all of it off.

## Components
- Nav: white three-section bar (logo, links, LINE button). Below 60rem: logo + menu disclosure.
- Footer: Ft1 mast-headed on dark.
- Primary action: filled LINE button. Secondary: text link with accent underline.
- Sticky LINE bar with price on small screens.
- Package contents: bento tiles with CSS-drawn art, data from `src/lib/service.ts` (single source for home and service page).

## Copy rules
- No invented metrics, reviews, team members, or case studies. Leave a section out until real data exists.
- Package scope and price come from `src/lib/service.ts` only.
