# Design — aboutlogo.com

Locked design system for the marketing site. Every page reads this before changing layout or style. Amend this file when the system needs to grow; do not override per page.

## Genre
editorial

## Macrostructure family
- Marketing pages (home, services/*): Bento Grid. White hero with the price, then the package shown as illustrated tiles, pale work band, numbered step cards, pale closing band.
- Story (`/story`): magazine feature. Cover with issue line, oversized title, deck and contents list; numbered chapters on a 12-column grid that alternate between two-column text, text with image right, and image left; pull quotes and boxed side notes. Content lives in `src/lib/story.ts`.
- Portfolio index: two-column grid with offset rows under a pale page head.
- Case, about, contact, legal: pale page head, one split below.

## Theme
Shares its direction with loveluckybebe.com (Going Studio). Tokens live in `src/app/tokens.css`.
- Layout and type follow that project; the palette does not. Monochrome only: white paper, near-black ink, neutral greys.
- Square corners, hairline rules, generous whitespace. One soft shadow, used only on the inset hero card.
- Work images in listings sit in greyscale and ease into colour on hover (desktop) or mid-screen (touch). The hero and single-case images are full colour.

## Typography
- Jost (Latin) + Anuphan (Thai) via `next/font`, weights 300 / 400 / 500. Body is 300.
- h1 is 300 with slight tracking; small labels are 11px uppercase with 0.22em tracking.

## Hero
Text left (label, headline, rule + price line, one paragraph, LINE button + text link). Right: a 4:5 work image with a smaller white-framed image overlapping its lower left, cross-fading through five projects, with a counter and progress rule (`HeroLayered.tsx`).

## Spacing
4pt named scale in `tokens.css`. Use `var(--space-*)`, never raw values.

## Motion
- Hero and page heads rise in on load (staggered). Content below the fold rises in once as it reaches the viewport (`Reveal.tsx`); nothing loops or autoplays.
- Motion is slow and quiet: fades with a few pixels of travel, no lifts, no shadows. The greyscale-to-colour change on work images takes about a second.
- Header is sticky with a blurred translucent background. FAQ answers ease open where the browser supports it.
- Easings `--ease-out`, `--ease-in`, `--ease-in-out`; reduced motion turns all of it off.

## Components
- Nav: logo left, links right, LINE as an underlined link; hairline under the bar inset to the page width. Below 60rem: logo + menu disclosure.
- Footer: Ft1 mast-headed on dark.
- Primary action: filled LINE button. Secondary: text link with accent underline.
- Sticky LINE bar with price on small screens.
- Package contents: bento tiles with CSS-drawn art, data from `src/lib/service.ts` (single source for home and service page).

## Copy rules
- No invented metrics, reviews, team members, or case studies. Leave a section out until real data exists.
- Package scope and price come from `src/lib/service.ts` only.
