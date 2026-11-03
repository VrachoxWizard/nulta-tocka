# Design: Nulta točka

The system every visual change follows. "Proljetno jutro" replaced "Jutarnje svjetlo" on 2026-11-02, after a question round with the owners: serious and trustworthy, fresher and stronger colours, fewer colours, type with character, a less monotonous layout. Change it on purpose; the file is the rule.

## System: "Proljetno jutro"
- Dark pine and white carry the page, mint is the band colour, green is for actions, sunny yellow is only an accent (the button on dark surfaces, the skripta marker, the "najčešći izbor" tag, text selection).
- Headings in Newsreader (serif: trust, standing), text in Albert Sans; Outfit only in the wordmark, as on the logo.
- Straight, full-width transitions between sections. No hills, no geometric shapes (the flyer's circles were removed at the owners' request).
- Black-and-white photography: the hero chair, the founders, the close, and one full-width misty forest.
- Copy rules: mentorstvo, podrška, razgovor, osobni razvoj; never terapija, psihoterapija, savjetovanje, psihološka pomoć or dijagnoza. The footer disclaimer stays verbatim. Crisis numbers are not shown (owners' decision); the FAQ still says "Ako si u krizi, odmah nazovi 112."

## Tokens
`src/styles/tokens.css` is the source of truth: `--ref-*` is the palette (OKLCH), `--color-*` are the roles components use.
```
palette:  pine #0F3D2E · pine-2 #164A38 · white #FFFFFF · mint #CFE8DA · mint-50 #EEF7F2
          ink #0E2219 · ink-2 #33463D · muted #5A6B62 · muted-mint #4B5C53
          green #1F7A4A (buttons) / deep #17603A / deeper #0F4A2C · green-live #2E8B57 (icons)
          sun #FFD166 / sun-light #FFE29A
          on pine: cream #F4F1E6 · cream-2 #C9D8CF · cream-muted #BDD0C4 · pine-rule #467563
roles:    --color-paper, -paper-3, -band (mint), -card (mint-50), -forest, -forest-2, -highlight (sun), -icon,
          -ink, -ink-2, -muted, -rule, -accent, -accent-deep, -accent-ink, -focus
shape:    --radius-tile 16px (cards), --radius-photo (12 to 20px), --radius-pill, --radius-card 8px (inputs)
font:     --font-display "Newsreader Variable" (opsz + italic) · --font-body "Albert Sans Variable" · --font-outlier "Outfit Variable"
```
- `.band--mint` darkens muted and green so text and links keep AA on mint.
- `.tone-dark` (pine): cream text, yellow accent with pine text; hover lightens (`sun-light`) so contrast grows. `.tone-light` restores light roles inside a dark band (the skripta sheet).
- Every text pair passes WCAG AA and small text holds APCA Lc 65 or more (checked 2026-11-02). Rules on pine are decorative (2.3:1).
- Colour literals outside tokens: `theme-color` in `Base.astro` (= white) and the Cal.com brand in `rezervacija.astro` (= `--ref-green` #1F7A4A); keep them in sync.

## Rhythm of the home page
| Section | Surface |
|---|---|
| Hero | pine, `tone-dark`, Svitanje |
| Josipa i Mate | white |
| Statement (`Statement.astro`) | mint, large Newsreader italic quote, centred |
| Topics | white, six mint-50 tiles with Lucide line icons (`Icon.astro`); the sixth is outlined and invites other topics |
| Skripta | pine, `tone-dark`; white sheet with a yellow marker |
| Wide photo (`Wide.astro`) | edge to edge, B&W misty forest |
| Prices | white; three equal cards (subgrid); the 10 € intro is a pine card with the yellow button, the others outlined with `.btn--quiet` |
| FAQ | mint |
| Close | white |
| Footer | pine |

Subpages open on a mint `PageHeader` band and continue on white; /o-nama bios sit on mint; 404 is a mint band.

## Signature: Svitanje
On the home hero the headline words rise one after another (`.hero__w`), a soft mint light spreads from the upper right of the pine band (`.dawn` in `global.css`; yellow was tried and turned the pine olive), the photo brightens. Once on load, nothing on scroll; reduced motion shows the final state at once.

## Type
- Display: Newsreader 400 to 450, tracking -0.015em (hero -0.025em), optical sizing on; quotes and blockquotes in its italic.
- Card and step titles: Newsreader at `--text-xl` (topics, plans) or Albert Sans 600 at `--text-title` (steps).
- Body: Albert Sans 400, 1.0625rem, line-height 1.6, lines under 70 characters.
- No eyebrows, no tracked caps labels, no `·`-joined meta strings, no arrows glued to labels, no em or en dashes in copy, no single accented word in a heading.

## Controls
- Primary: `.btn`, 48px pill: green with white text on light surfaces, yellow with pine text on pine. One per screen.
- Secondary: `.btn--quiet` (ink outline) or an underlined word (`.link`).

## UX rules
- Every real sequence uses the shared `.steps` list in `global.css` (`.steps--compact` in narrow columns). The booking steps live once in `src/data/steps.ts`, so a step keeps the same name everywhere.
- Empty states lead to an action: /kontakt and /rezervacija without their keys show a button to Instagram (or e-mail).
- The footer sits at the bottom of short pages (`body` is a flex column, `main` grows).
- Sentence headings end with a full stop; topic headings ("O čemu razgovaramo", "Prije nego što se javiš") do not.
- Header links mark the current page (`aria-current`); a blog post marks Blog. On /rezervacija the header booking button is filled ink.
- The mobile menu (mint) moves focus to its first link, keeps Tab inside, returns focus to the toggle on Escape and closes when the window grows to desktop. The header blur sits on `.nav::before`, never on `.nav` itself (it would trap the fixed menu inside the header).
- Two dark surfaces never touch: a pine section is always followed by white or mint before the pine footer.
- Links name what happens ("Rezerviraj uvodni razgovor", "Piši nam"); footer touch targets are about 40px tall.

## Motion
Svitanje on the home hero; FAQ answers open smoothly where the browser supports `::details-content`; the mobile menu fades; nothing on scroll.

## Photo credits (Unsplash licence, no attribution required)
- `src/assets/hero.jpg`: Brunxs Monochrome, unsplash.com/photos/K0bc15BCR8k
- `src/assets/close.jpg`: Nellie Adamyan, unsplash.com/photos/X-2UpU_gY-Q
- `src/assets/wide.jpg`: Sebastian Unrau, unsplash.com/photos/sp-p7uuT0tw
- Icons: Lucide (lucide.dev), ISC licence, inlined in `src/components/Icon.astro`.
