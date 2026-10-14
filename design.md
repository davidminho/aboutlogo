# Design — aboutlogo.com

Locked design system for the marketing site. Every page reads this before changing layout or style. Amend this file when the system needs to grow; do not override per page.

## Genre
editorial

## Macrostructure family
- Marketing pages (home, services/*): Bento Grid. White hero with the price, then the package shown as illustrated tiles, pale work band, numbered step cards, pale closing band.
- Portfolio index: two-column grid with offset rows under a pale page head.
- Case, about, contact, legal: pale page head, one split below.

## Theme
Custom. Tokens live in `src/app/tokens.css`.
- White paper `--color-paper` throughout; pale `--color-paper-2` for alternating bands, tiles and page heads.
- Dark ink `--color-dark` only for the footer and the logo tile.
- One colour family only: green. `--color-accent` for tile art and link underlines, `--color-accent-ink` for small labels. The price and step numbers are ink black.
- `--color-line` (LINE green, darkened for AA contrast with white text) is reserved for the LINE action.

## Typography
- Display and body: Helvetica Neue World (Adobe Fonts kit `hvh3vlm`), weights 400 and 700 only.
- Headings are roman, 700, line-height 1.18. Price uses `--text-price`.
- No numbered eyebrows above section headings.

## Spacing
4pt named scale in `tokens.css`. Use `var(--space-*)`, never raw values.

## Motion
- Hero and page heads rise in on load (staggered). Content below the fold rises in once as it reaches the viewport (`Reveal.tsx`); nothing loops or autoplays.
- Hover: cards lift with a soft shadow, tile art shifts slightly, work thumbnails zoom.
- Header is sticky with a blurred translucent background. FAQ answers ease open where the browser supports it.
- Easings `--ease-out`, `--ease-in`, `--ease-in-out`; reduced motion turns all of it off.

## Components
- Nav: white three-section bar (logo, links, LINE button). Below 60rem: logo + menu disclosure.
- Footer: Ft1 mast-headed on dark.
- Primary action: filled LINE button. Secondary: text link with accent underline.
- Sticky LINE bar with price on small screens.
- Package contents: bento tiles with CSS-drawn art, data from `src/lib/service.ts` (single source for home and service page).
- Radius: `--radius-lg` on images, tiles and step cards.

## Copy rules
- No invented metrics, reviews, team members, or case studies. Leave a section out until real data exists.
- Package scope and price come from `src/lib/service.ts` only.
