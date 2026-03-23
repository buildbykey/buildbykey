# BuildByKey — Project Brain

> This file is the authoritative context for all AI-assisted development on this project.
> It embeds the design framework, website-building research, and project decisions.
> Read this before writing any code.

---

## Agents & Skills Map

### Agents (`.claude/agents/`) — invoke via `use agent: <name>`
| Agent | When to use |
|-------|-------------|
| `code-reviewer` | After any edit to index.html — catches bugs, a11y issues, security |
| `seo-auditor` | Before launch or after adding content — meta tags, headings, schema |
| `copywriter` | When writing or improving visible text — hero, services, about, CTAs |
| `performance-checker` | Before launch or after adding animations/media — Core Web Vitals |
| `design-guardian` | Before and after any visual change — enforces taste-skill rules (audit only) |
| `code-brain` | After any edit to index.html — updates `docs/code-state.md` snapshot so future sessions don't re-read 1400 lines |
| `ui-designer` | **Implements** design changes — layout, spacing, typography, color. Edits index.html directly |
| `section-builder` | Builds a new section from scratch (FAQ, testimonials, portfolio, stats, etc.) |
| `visual-fixer` | Applies audit violations from design-guardian to index.html — surgical fixes only |

### Skills / Commands (`.claude/commands/`) — invoke via `/command`
| Command | What it does |
|---------|-------------|
| `/taste [section]` | Build a new section using the taste-skill design framework |
| `/review` | Full code quality + design + performance review |
| `/seo` or `/seo fix` | SEO audit; `fix` applies changes directly |
| `/launch-check` | Pre-launch go/no-go checklist |
| `/improve-copy` or `/improve-copy apply` | Copy review; `apply` edits the file |

### Roles (`.claude/settings.json`)
| Role | Agents | Scope |
|------|--------|-------|
| `designer` | design-guardian, code-reviewer | index.html, assets/ |
| `seo-specialist` | seo-auditor | index.html, docs/ |
| `copywriter` | copywriter | index.html, docs/content-plan.md |
| `performance-engineer` | performance-checker | index.html, assets/ |
| `owner` | all | everything |
| `maintainer` | code-brain | index.html, docs/code-state.md |

---

## Project Identity

- **Business**: BuildByKey — Website Sales Agency
- **Founder**: Tomasz Klucz
- **Mission**: Build high-converting, custom websites for small and growing businesses
- **Services**: Landing Pages · Custom Websites · E-Commerce Stores
- **Contact method**: Email only (`hello@buildbykey.com` — update to real address)
- **Stack**: Pure HTML/CSS/JS (zero build step, deployable to any static host)
- **File**: Single `index.html` with embedded styles and scripts

---

## Design Framework: taste-skill (Senior UI/UX Engineering)

> Sourced from https://github.com/Leonxlnx/taste-skill — apply these rules to all UI work.

### Core Configuration
- **DESIGN_VARIANCE: 8** — asymmetric, creative layouts. Centered hero sections are BANNED.
- **MOTION_INTENSITY: 6** — fluid CSS animations, selective JS scroll triggers
- **VISUAL_DENSITY: 4** — balanced breathing whitespace

### Non-Negotiable Technical Rules
- Tailwind CSS is the styling standard when using a framework; use equivalent CSS custom properties when writing vanilla CSS
- Ban emojis — use SVG icons or Unicode symbols sparingly
- Use `min-h-[100dvh]` not `h-screen` (iOS Safari viewport collapse prevention)
- CSS Grid supersedes complex flexbox math
- Animate only `transform` and `opacity` — never `top`, `left`, `width`, `height`

### Design Engineering Rules
1. **Typography**: Headlines use `clamp()` fluid sizing, `font-weight: 800`, `letter-spacing: -0.03em`. Body defaults to `font-size: 16-17px`, `line-height: 1.7`, `max-width: 65ch`. Font: **Outfit** (Google Fonts). **Inter is BANNED.**
2. **Single accent color**: Max one accent, saturation below 80%. The "AI purple/blue aesthetic" is BANNED. This project uses warm gold: `#c8a459`.
3. **Layout**: Always asymmetric or split-screen. No 3-column card grids. No centered text over dark images.
4. **Anti-card overuse**: For services/features, use border dividers and negative space instead of boxed cards.
5. **Interaction cycles**: Implement hover states, loading states (forms), and tactile feedback (`translateY(-1px)` or `scale(0.98)` on buttons).
6. **Forms**: Labels above inputs, error text below, consistent `gap` spacing.

### Forbidden Patterns
- No neon glows, pure black `#000000`, oversaturated accents, gradient text fills
- No serif fonts (editorial use only)
- No 3-column card grids
- No generic placeholder names ("John Doe"), fake avatars, startup clichés ("Seamless", "Nexus")
- No broken image links — use styled placeholder frames instead

### Performance Rules
- Animate via `transform` and `opacity` only
- Use CSS transitions for hover states; JS IntersectionObserver for scroll reveals
- No heavy JS frameworks in this project (vanilla only)

---

## Website Building Research

### Conversion Rate Optimization (CRO)
Key principles embedded in this design:
- **Above-the-fold clarity**: Visitor must know what you do, who it's for, and what to do next within 3 seconds
- **Single primary CTA**: One dominant call-to-action per section (not multiple competing CTAs)
- **Social proof proximity**: Stats and credibility signals placed near the hero, not buried below
- **Pricing transparency**: Showing prices increases qualified lead quality — unqualified prospects self-filter
- **Friction reduction**: Contact form with 3 fields max for initial inquiry; email prominently displayed as fallback
- **Trust signals**: Founder face/name, specific deliverables, clear process — all reduce hesitation

### SEO Best Practices
- Semantic HTML structure: `<nav>`, `<section>`, `<article>`, `<footer>` — screen readers + crawlers
- Single `<h1>` per page, logical heading hierarchy (h1 → h2 → h3)
- `<meta name="description">` set to 150–160 chars, keyword-rich
- Page title format: `{Brand} — {Value Proposition}`
- Images: always `alt` text, lazy loading for below-fold images
- Internal anchor links signal content structure to search engines
- Fast load time is a ranking factor — no unused CSS/JS, no blocking resources

### Performance
- Google's Core Web Vitals are ranking factors:
  - **LCP** (Largest Contentful Paint): < 2.5s — avoid large hero images; use CSS shapes instead
  - **CLS** (Cumulative Layout Shift): < 0.1 — set explicit dimensions on media elements
  - **INP** (Interaction to Next Paint): < 200ms — keep JS event handlers lightweight
- Use `font-display: swap` on custom fonts (Google Fonts handles this automatically)
- Preconnect to font CDN: `<link rel="preconnect" href="https://fonts.googleapis.com">`
- Keep total page weight under 500KB for fast mobile load

### Web Agency Positioning Research
What separates high-converting agency sites from generic ones:
1. **Specificity over vagueness**: "Landing pages that convert visitors to leads" beats "We build great websites"
2. **Process transparency**: Showing the 4-step process reduces buyer anxiety
3. **Tiered pricing works**: Anchoring with a high-priced tier makes the middle tier feel reasonable (decoy effect)
4. **Founder visibility**: Personal brands outperform anonymous agencies for small/solo operators — show the face
5. **Speed as a differentiator**: "3× faster than typical agencies" is a concrete, believable claim
6. **Mobile-first proof**: Your own site being perfectly mobile-responsive IS your portfolio

### UX Patterns That Work for Service Businesses
- **Sticky nav with CTA**: Always-visible "Get in touch" button captures impulse conversions
- **Numbered process**: Reduces perceived complexity of hiring someone new
- **"Most Popular" badge**: Middle-tier pricing anchor increases conversions to that tier
- **Email displayed in plain text**: More trust than a "form only" approach
- **Footer navigation**: Users who scroll to footer are highly interested — repeat nav links

---

## Design System — BuildByKey

### Color Palette
```
--bg:           #09090b   /* near-black background, not pure black */
--surface:      #111113   /* elevated surfaces */
--surface-2:    #18181b   /* cards, inputs */
--border:       rgba(255, 255, 255, 0.07)
--border-hover: rgba(255, 255, 255, 0.14)
--text:         #fafaf9   /* primary text */
--text-muted:   #71717a   /* secondary text */
--text-dim:     #3f3f46   /* disabled / decorative */
--accent:       #c8a459   /* warm gold — single accent color */
--accent-dim:   rgba(200, 164, 89, 0.10)
--accent-border: rgba(200, 164, 89, 0.30)
```

### Typography
```
Font family:    'Outfit', sans-serif (Google Fonts)
H1:             clamp(48px, 6vw, 80px), weight 800, tracking -0.03em, line-height 1.05
H2:             clamp(36px, 4vw, 52px), weight 800, tracking -0.025em, line-height 1.1
H3:             22px, weight 700, tracking -0.01em
Body:           16-17px, weight 400, line-height 1.7, color var(--text-muted)
Label:          11px, weight 600, tracking 0.12em, UPPERCASE, color var(--accent)
Nav links:      14px, weight 400, color var(--text-muted)
```

### Spacing
```
Section padding:  100px 0 (70px on mobile)
Container:        max-width 1200px, padding 0 32px (20px on mobile)
Grid gaps:        60-80px between major columns
Card padding:     40px 36px
```

### Component Patterns
- **Buttons**: `border-radius: 8px`, transition `opacity + translateY(-1px)` on hover, `scale(0.98)` on active
- **Pill nav**: `border-radius: 100px`, `backdrop-filter: blur(20px)`, fixed top center
- **Section labels**: Small uppercase text with a 16px line before it (accent color)
- **Border dividers**: Prefer `border-bottom: 1px solid var(--border)` over card boxes for lists
- **Tags/chips**: `border-radius: 100px`, 11px text, border + bg fill

---

## Page Structure

```
/index.html
├── <nav>         Floating pill navbar — logo, links, CTA button
├── <section>     Hero — asymmetric 2-col grid, headline left, stats+mockup right
├── <section>     Services — border-divider list (not card grid), 3 services
├── <section>     Process — 4-step horizontal grid
├── <section>     Pricing — 3-tier grid with featured center card
├── <section>     About — split grid, founder portrait + bio
├── <section>     Contact — split grid, CTA left + form right
└── <footer>      Minimal bar — brand, links, copyright
```

---

## Deployment Options

This is a static single-file site. Deploy to any of these for free:
- **GitHub Pages**: Push `index.html` to a repo, enable Pages
- **Netlify**: Drag and drop the file at netlify.com/drop
- **Vercel**: `npx vercel` in the project folder
- **Cloudflare Pages**: Connect GitHub repo

### Custom Domain
After deploying, point your domain's DNS:
- `A` record → host IP, OR
- `CNAME` → `<username>.github.io` / `<project>.netlify.app`

---

## Things To Update Before Going Live

- [ ] Replace `hello@buildbykey.com` with your real email address (appears in `<footer>` contact section and `<a href="mailto:...">`)
- [ ] Replace placeholder prices (€599 / €1,499 / €2,999) with your actual rates
- [ ] Connect the contact form to a real backend (options: Formspree, Netlify Forms, EmailJS)
- [ ] Add real portfolio screenshots once you have client work
- [ ] Add your profile photo to the About section (replace the TK initials frame)
- [ ] Set a real favicon
- [ ] Update `<meta name="description">` with your exact value proposition
- [ ] Add Google Analytics or Plausible tracking ID

---

## Form Backend Options (pick one)

Since this is a static site, forms need a third-party handler:

**Option 1 — Formspree (easiest)**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2 — Netlify Forms (if hosted on Netlify)**
```html
<form name="contact" netlify>
```

**Option 3 — EmailJS (no backend, sends direct email)**
```js
emailjs.send('service_id', 'template_id', formData, 'public_key');
```

---

*This CLAUDE.md was generated by Claude Code on 2026-03-18 using the taste-skill design framework.*
