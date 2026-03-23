# review — Full Website Code Review

Run a comprehensive review of the BuildByKey website using all quality agents.

## How to use
`/review` — reviews the entire index.html
`/review [specific concern]` — focuses on a specific area

---

## Review Sequence

You will perform a full review of `index.html` across four dimensions. Read the file once, then report on all four areas.

### 1. Code Quality (from code-reviewer agent rules)
Check:
- HTML semantics and accessibility (headings, labels, alt text, landmarks)
- CSS quality (custom properties, animation properties, responsive breakpoints)
- JavaScript quality (passive listeners, no console.log, IntersectionObserver usage)
- Security (no XSS vectors, external links have rel="noopener noreferrer")

### 2. Design Compliance (from design-guardian agent rules)
Check:
- No banned colors (#000000, neon, gradients, second accent)
- No Inter font, no emoji, no centered hero
- No 3-column card grids
- Correct typography scale (weights, tracking, clamp sizing)
- All interaction states present (hover, active, focus)

### 3. Performance (from performance-checker agent rules)
Check:
- Fonts: preconnect + display=swap
- Animations: transform/opacity only
- Scroll listeners: passive: true
- No blocking scripts in head
- No large inline assets

### 4. Pre-Launch Checklist
Check:
- [ ] Email placeholder `hello@buildbykey.com` — is it still a placeholder?
- [ ] Prices — are they still placeholder values or real rates?
- [ ] Contact form — does it have a real backend (Formspree/Netlify)?
- [ ] Meta description — is it specific and keyword-rich?
- [ ] No `console.log` or debug code remaining
- [ ] All links work (no `href="#"` dead links in production)

---

## Output Format

```
## Full Review — BuildByKey

### Code Quality: [PASS / WARN / FAIL]
[Issues found or "No issues"]

### Design Compliance: [PASS / WARN / FAIL]
[Issues found or "Fully compliant"]

### Performance: [PASS / WARN / FAIL]
[Issues found or "No issues"]

### Pre-Launch: [X/6 ready]
[Remaining items]

### Priority Fix List
1. [Most critical first]
2. ...

### Overall Status: [READY TO LAUNCH / NEEDS WORK / NOT READY]
```
