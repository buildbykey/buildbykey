# launch-check — Pre-Launch Checklist

Run the complete pre-launch checklist for the BuildByKey website before making it public.

## How to use
`/launch-check` — runs all checks and returns a go/no-go verdict

---

## Pre-Launch Checklist

You will read `index.html` and verify every item below. Be strict — a "pass" means the item is fully complete, not just "good enough".

### Content Readiness
- [ ] Email address is NOT `hello@buildbykey.com` placeholder — it's a real, working address
- [ ] All prices show real rates (not placeholder €599/€1499/€2999 if changed)
- [ ] Founder section has real content — no "TK" initials (add real photo or keep styled frame intentionally)
- [ ] No Lorem Ipsum or placeholder text anywhere
- [ ] All service descriptions are accurate to what's actually offered
- [ ] Copyright year in footer matches current year (2026)

### Technical Readiness
- [ ] Contact form is connected to a real backend (Formspree / Netlify Forms / EmailJS — not just the fake setTimeout)
- [ ] Google Analytics or Plausible tracking ID is added
- [ ] Favicon is set (`<link rel="icon">`)
- [ ] Meta description is specific and contains target keywords
- [ ] Open Graph image is set (for social sharing previews)
- [ ] Canonical URL is set to the live domain
- [ ] No `console.log` statements in JS

### Performance Readiness
- [ ] Google Fonts loaded with preconnect
- [ ] No render-blocking scripts in `<head>`
- [ ] All images have width + height attributes
- [ ] Animations use transform/opacity only

### Deployment Readiness
- [ ] Custom domain configured (or subdomain on Netlify/GitHub Pages)
- [ ] HTTPS enabled on the hosting platform
- [ ] File is tested on: Chrome, Firefox, Safari, mobile Chrome, mobile Safari

---

## Output Format

```
## Pre-Launch Report — BuildByKey

### Content: [X/6 ready]
### Technical: [X/7 ready]
### Performance: [X/4 ready]
### Deployment: [X/3 ready]

### Blocking Issues (must fix before launch)
1. [Issue] → [How to fix]

### Non-Blocking Issues (fix post-launch)
- [Issue]

### VERDICT: [GO / NO-GO]
[One sentence summary]
```
