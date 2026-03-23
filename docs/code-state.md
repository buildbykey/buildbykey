# BuildByKey — Code State Snapshot

> **CEL TEGO PLIKU**: Skrót stanu `index.html` — żeby AI nie musiało czytać 1400 linii przed każdą zmianą.
> Aktualizuj ten plik po każdej znaczącej zmianie w kodzie.
> Ostatnia aktualizacja: 2026-03-22 (services 03 → Materiały sprzedażowe; pricing tier 3 → od 1 200 zł; contact budget placeholder updated)

---

## Plik główny
- **Ścieżka**: `c:/Users/tomci/BuildByKey/index.html`
- **Rozmiar**: ~1387 linii (HTML + CSS + JS w jednym pliku)
- **Stack**: Pure HTML/CSS/JS — zero build step

---

## Struktura HTML (sekcje i ich ID)

Sections are wrapped in `<main>` landmark (added by code-reviewer). `<body id="top">` for logo anchor.

| Sekcja        | Element  | ID / class  | aria-label |
|---------------|----------|-------------|------------|
| Lang toggle   | `<div>`  | `.lang-toggle` | "Wybór języka" |
| Navbar        | `<nav>`  | `#nav`      | —          |
| **`<main>`**  | —        | —           | —          |
| Hero          | `<section>` | `.hero`  | "Hero"     |
| Usługi        | `<section>` | `#services` | "Oferta" |
| Proces        | `<section>` | `#process` | "Jak to działa" |
| Cennik        | `<section>` | `#pricing` | "Cennik"  |
| O mnie        | `<section>` | `#about`  | "O mnie"   |
| Kontakt       | `<section>` | `#contact` | "Kontakt" |
| **`</main>`** | —        | —           | —          |
| Footer        | `<footer>`  | —          | —          |
| `<script>`    | —        | —           | —          |

---

## Design System — CSS custom properties (linia 28–40)

```css
--bg:            #09090b     /* niemal czarne tło */
--surface:       #111113
--surface-2:     #18181b
--border:        rgba(255,255,255,0.07)
--border-hover:  rgba(255,255,255,0.14)
--text:          #fafaf9
--text-muted:    #71717a
--text-dim:      #3f3f46
--accent:        #c8a459     /* złoty — jedyny kolor akcentu */
--accent-dim:    rgba(200,164,89,0.10)
--accent-border: rgba(200,164,89,0.30)
```

Font: `'Outfit', sans-serif` (Google Fonts) — Inter ZABRONIONY.

---

## Kluczowe elementy CSS

### Navbar (linia 99–149)
- `.nav` — fixed, top 20px, centered (`left:50%; transform:translateX(-50%)`), pill shape (`border-radius:100px`), `backdrop-filter` USUNIĘTY
- `.nav-logo` — CSS text, wszystkie spansy w `var(--accent)`:
  ```html
  <span class="logo-build">Build</span><span class="logo-by">By</span><span class="logo-key">Key</span>
  ```
- `.nav-cta` — pill button, `background: var(--accent)`, kolor `#09090b`

### Lang Toggle (linia 63–96)
- Pozycja: `fixed; top:22px; left:32px; z-index:200`
- Dwa przyciski `#btn-pl` i `#btn-en`, aktywny dostaje klasę `.active` (złote tło)

### Hero (linia 151–267)
- Layout: **wyśrodkowany** (nie asymetryczny) — `flex; align-items:center; text-align:center`
- **Tło**: dwa `<video>` z crossfade JS (`#hero-vid-a`, `#hero-vid-b`)
- Source: `assets/images/aurora-hero.mp4`
- Overlay: `rgba(9,9,11,0.58)` — `.hero-video-overlay`
- Heading: `clamp(52px, 7vw, 96px)`, waga 800, tracking `-0.04em`
- **Tekst H1**: "Nie budujemy stron. Budujemy **przewagi.**"
- Subtext: "Projektujemy strony, które przyciągają uwagę i napędzają Twój biznes."
- Stats pill row: 4 pigułki z faktami (100%, 1–3 tygodnie, SEO, 24/7)
- **Brak** `border-right` na `.hero-left` — usunięte wcześniej (powodowało pionową linię)

### Usługi (linia 1098–1150)
- Układ: `border-bottom` dividers, **NIE** card grid
- Intro text (`.section-sub`): "Buduję strony internetowe i tworzę materiały sprzedażowe dla twórców, freelancerów i małych firm — szybko, estetycznie, skutecznie."
- 3 pozycje:
  - 01 Landing Page
  - 02 Strony firmowe
  - 03 **Materiały sprzedażowe** — prezentacje, oferty handlowe i broszury PDF (dawniej: Sklepy internetowe)
- Każda: `grid-template-columns: 56px 1fr auto` (numer | treść | strzałka)
- Hover: `.service-name` zmienia kolor na `var(--accent)`, strzałka `translate(3px,-3px)`

### Proces (linia 522–557)
- `background: var(--surface)` — jedyna sekcja z innym tłem (poza kontaktem)
- 4 kroki w `grid-template-columns: repeat(4,1fr)`
- Na mobile: `grid-template-columns: 1fr 1fr`

### Cennik (linia 1196–1280)
- 3 karty: Start (1 500 zł) | Wzrost (3 000 zł) — FEATURED | Materiały (od 1 200 zł)
- Tier 3 to teraz **Materiały** (prezentacje, oferty, broszury PDF) — dawniej "Sklep"
- Featured card ma `background: var(--surface)` i złoty `.pricing-cta`
- **Ceny główne** w elementach `#price-1`, `#price-2`, `#price-3` (aktualizowane przez JS)
- Tier 3: HTML hardcode `od 1 200 zł` (linia 1245); `.pricing-annual` zawiera "wycena zależna od zakresu" (brak kosztu rocznego)
- **UWAGA — bug**: `PRICES.pl.p3` w JS (linia 1436) nadal ma wartość `od 700 zł` — nie zgadza się z HTML. Wymaga poprawy.
- `.pricing-annual strong` — kolor `var(--accent)`

### O mnie (linia 667–722)
- `grid-template-columns: 1fr 1.3fr` — zdjęcie po lewej, bio po prawej
- Ramka na zdjęcie: `aspect-ratio: 3/4`, inicjały "TK" (brak prawdziwego zdjęcia)
- Tagi: Programista, Designer, Przedsiębiorca

### Kontakt (linia 724–800)
- **Tło**: `<video class="contact-video">` — `assets/images/zlote-wezly.mp4`, `opacity: 0.75`
- Overlay: `linear-gradient(135deg, rgba(9,9,11,0.80) 30%, rgba(9,9,11,0.40) 100%)`
- Layout: `grid-template-columns: 1fr 1.1fr`
- Email: `hello@buildbykey.com` (PLACEHOLDER — wymienić przed launchem!)
- Formularz: 4 pola (imię, email, budżet, wiadomość) — **NIE PODŁĄCZONY** do backendu (setTimeout mock)
- Budget placeholder: `np. 1500–6000 zł` (PL) / `e.g. €350–€1500` (EN) — via `data-placeholder-pl/en`

### Animacje scroll (linia 812–821)
- Klasa `.fade-up` — `opacity:0; transform:translateY(20px)`
- Po wejściu w viewport dodawana `.visible` przez IntersectionObserver

---

## JavaScript (linia 1249–1384)

### System językowy (linia 1251–1300)
```js
const PRICES = {
  pl: { p1: '1 500 zł',  p2: '3 000 zł',       p3: 'od 700 zł' },  // p3 BUG — powinno być 'od 1 200 zł'
  en: { p1: '€350',      p2: '€700',             p3: 'from €165' }
};
let currentLang = 'pl';
function setLang(lang) { ... }
```
- Atrybuty `data-pl` / `data-en` na każdym elemencie z tekstem
- `data-placeholder-pl` / `data-placeholder-en` na polach formularza
- Aktualizuje: `document.title`, `<meta name="description">`, `document.documentElement.lang`

### Hero Crossfade (linia ~1211)
```js
// Dwa video: hero-vid-a (autoplay), hero-vid-b (opacity:0)
// FADE = 1.8s przed końcem: standby.play() + zamiana opacity
// scheduleMonitor() z flagą `monitoring` zapobiega podwójnemu rAF loop
// prevDuration capture przed swapem — poprawka błędu NaN delay
```

### Inne funkcje JS
- **IntersectionObserver** — scroll reveal `.fade-up` (threshold 0.08)
- **Smooth scroll** — wszystkie `a[href^="#"]`
- **Nav shadow** — `box-shadow` po scrollY > 60px
- **Form submit** — mock setTimeout 900ms, potem sukces (NIE wysyła e-maila)

---

## Zmiany z mobile & performance pass (2026-03-18)

### Mobile fixes
- **Navbar mobile**: hamburger button (`#nav-hamburger`) added inside `.nav`; desktop `.nav-links` + `.nav-cta` hidden at ≤640px; JS toggle adds `.menu-open` to `.nav`, sibling CSS selector shows `.nav-mobile-menu` dropdown (fixed, centered, 16px links)
- **Hero heading**: `clamp(52px,…)` → `clamp(38px,…)` so it scales down to 375px devices; `font-size: 42px` override in 640px breakpoint replaced with `clamp(34px, 9vw, 42px)`
- **Hero stats row**: 2×2 CSS Grid on ≤640px instead of single wrapping flex row; `border-radius: 14px`; borders drawn per cell
- **Pricing padding**: reduced from `40px 34px` to `28px 22px` at ≤640px
- **About portrait**: `aspect-ratio: 16/8` (too flat with logo) changed to `4/3` at 960px and `3/2` at 640px; `max-width` constraints added
- **Contact form inputs**: `font-size: 16px` enforced at ≤640px to prevent iOS auto-zoom on focus
- **Footer**: stacked `flex-direction: column` at ≤640px; footer-links allowed to wrap with `gap: 16px`
- **Lang toggle**: repositioned to `bottom: 20px; left: 50%; transform: translateX(-50%)` at ≤640px to avoid overlapping navbar

### Performance fixes
- **Contact video lazy load**: removed `autoplay preload="auto" <source>` from HTML; video now has `preload="none"` and `data-src`; IntersectionObserver (rootMargin 200px) injects `<source>`, calls `.load()` + `.play()` when section enters viewport
- **Portrait image CLS**: added `width="420" height="420" loading="lazy"` to `BuildByKey.jpeg`
- **Font loading**: confirmed `&display=swap` already present on Google Fonts URL (line 11)

### CSS/UX fixes
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` disables `.fade-up` animation and `@keyframes pulse-line` for scroll-line
- **Empty rule blocks**: removed `.services { }` and `.about { }`
- **Touch targets**: `.nav-links a`, `.footer-links a`, `.pricing-cta`, `.lang-btn`, `.btn-primary`, `.btn-ghost`, `.nav-cta`, `.form-submit`, `.contact-email` all get `min-height: 44px` at ≤640px
- **iOS tap flash**: `-webkit-tap-highlight-color: transparent` added to `body`

---

## Zmiany z code-reviewer (2026-03-18)

- **Dead CSS removed**: `.hero-right`, `.hero-stats`, `.stat`/`.stat-number`/`.stat-label`, `.browser-mockup`, `.browser-bar`, `.dot`, `.url-bar`, `.url-text`, `.browser-content`, `.preview-bar` (+modifiers), `.preview-btn-mock`, `.preview-grid-mock`, `.preview-card-mock`, `@keyframes flicker`
- **Dead responsive rules cleaned**: removed `.hero { grid-template-columns }`, `.hero-left { border-right:none }`, `.hero-right { padding }`, `.hero-stats { grid-template-columns }` from media queries
- **`<main>` landmark added** wrapping all `<section>` elements
- **`aria-label`** added to all 6 `<section>` elements
- **`aria-hidden="true"`** added to all 3 decorative `<video>` elements
- **Logo `href="#"` → `href="#top"`** + `aria-label` added; `<body id="top">` added
- **Hero stat pills** given `data-pl`/`data-en` attributes (bilingual system coverage)
- **Crossfade bug fixed**: `monitoring` guard + `prevDuration` capture prevents NaN delay + re-entrant rAF loops
- **Nav scroll handler**: null-guard added for `document.getElementById('nav')`
- **Form success**: `role="status"` + `aria-live="polite"` on `.form-success`; programmatic `.focus()` after submit
- **`.scroll-hint` CSS**: removed dead `position:absolute; bottom:40px; left:0` declarations; cleaned matching inline style

---

## Zasoby (assets/)

| Plik | Użycie | Sekcja |
|------|--------|--------|
| `assets/images/aurora-hero.mp4` | Hero background, dual video crossfade | Hero |
| `assets/images/zlote-wezly.mp4` | Contact background, opacity 0.75 | Kontakt |
| `assets/images/Logo BuildByKey.jpg` | Nieużywane — logo zastąpione CSS textem | — |

---

## Responsive breakpoints

| Breakpoint | Zmiany |
|------------|--------|
| `max-width: 960px` | Process 2-col, Pricing 1-col, About 1-col (`aspect-ratio: 4/3`), Contact 1-col |
| `max-width: 640px` | Hamburger menu, hero font `clamp(34px,9vw,42px)`, hero stats 2×2 grid, pricing `28px 22px`, portrait `3/2`, form inputs `font-size:16px`, footer column, lang toggle repositioned bottom |
| `lang-toggle inline` | Hero stats grid borders, touch targets 44px, prefers-reduced-motion |

---

## TODO przed launchem

- [ ] Zamień `hello@buildbykey.com` na prawdziwy e-mail
- [ ] Podłącz formularz do Formspree / Netlify Forms / EmailJS
- [ ] Dodaj favicon (`<link rel="icon">`)
- [ ] Dodaj zdjęcie profilowe (zastąp inicjały "TK")
- [ ] Dodaj Google Analytics / Plausible ID
- [ ] Ustaw Open Graph image
- [ ] Ustaw canonical URL na docelową domenę
