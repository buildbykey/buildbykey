# Konwencje kodowania

## Tech stack

- **HTML5** semantyczny (`<section>`, `<article>`, `<nav>`, `<footer>`, `<blockquote>`)
- **CSS3** — custom properties (`:root`), bez preprocessorów
- **Vanilla JS** — zero zewnętrznych bibliotek
- **Google Fonts** — ładowane przez `<link rel="preconnect">` + `<link>` w `<head>`

## Struktura plików

```
moja-strona/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
├── rules/          ← reguły Claude (ten folder)
└── .claude/
    └── CLAUDE.md
```

## CSS — zasady

**Metodologia:** BEM
```css
.section__title { }          /* element */
.card__image { }             /* element */
.service-card--highlight { } /* modifier */
```

**Mobile-first:** media queries od `min-width` (lub breakpointy `max-width` dla overrides)

**Breakpointy:**
- `480px` — tylko hamburger, 1-kolumnowe układy
- `768px` — tablety, siatki 2-kolumnowe, nav uproszczony
- `1024px` — desktop, pełne layouty dwukolumnowe

**Custom properties** zawsze w `:root`, nigdy hard-coded hex w komponentach.

**Kolejność sekcji w style.css:**
1. Reset + Custom Properties
2. Typografia globalna
3. Przyciski
4. Nav
5. Hero
6. Sekcje (w kolejności na stronie)
7. Footer
8. Mobile menu
9. Responsive (media queries)

## HTML — zasady

- `alt` na każdym `<img>` (SEO + accessibility)
- `aria-label` na przyciskach ikonowych
- `aria-expanded` na przyciskach akordeonu / menu
- `aria-hidden="true"` na dekoracyjnych elementach
- `novalidate` na formularzach z własną walidacją JS
- `rel="noopener"` na linkach `target="_blank"`

## JS — zasady

- Wszystko w `main.js`, bez modułów (prosta strona statyczna)
- `{ passive: true }` na listenerach scroll
- Intersection Observer do animacji fade-in (nie JS scroll events)
- Formularz: własna walidacja + symulowany submit (docelowo Formspree / EmailJS)
- Brak `document.write`, brak `eval`

## Komentarze

Tylko tam, gdzie logika nie jest oczywista. Format sekcji w CSS:
```css
/* ============================================================
   NAZWA SEKCJI
   ============================================================ */
```
