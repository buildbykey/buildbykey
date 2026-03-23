# seo — SEO Audit

Run a full on-page SEO audit of the BuildByKey website.

## How to use
`/seo` — full audit
`/seo fix` — audit AND apply fixes directly to index.html

---

## What This Does

You will act as the seo-auditor agent and perform a complete on-page SEO analysis of `index.html`.

### Target Keywords to Audit Against
Primary:
- "strony internetowe na zamówienie" (PL)
- "tworzenie stron internetowych" (PL)
- "custom website Poland"
- "web design agency"
- "landing page design service"

Secondary:
- "sklep internetowy na zamówienie"
- "strona dla firmy"
- "szybkie strony internetowe"

### Audit Scope
1. **Meta tags**: title, description, OG tags, canonical, robots
2. **Heading structure**: h1 uniqueness, hierarchy, keyword presence
3. **Content signals**: keyword usage in service descriptions, founder section, CTAs
4. **Technical**: viewport, lang attribute, font loading, no noindex
5. **Structured data**: check for missing schema (LocalBusiness, Service, Person)
6. **E-E-A-T signals**: founder name, expertise claims, contact info visibility

### If `/seo fix` is called
After the audit, directly edit `index.html` to:
- Add missing meta tags to `<head>`
- Add Open Graph tags if missing
- Fix heading issues
- Improve alt text on images
- Add basic LocalBusiness schema if missing

Always show a diff summary of what was changed.

### Output Format
```
## SEO Audit — BuildByKey

### Technical SEO: [X/8 checks passed]
### Content SEO: [X/6 checks passed]
### Structured Data: [X/3 checks passed]

### Critical Gaps
- [Issue] → [Fix]

### Recommended Meta Block (ready to paste)
<title>...</title>
<meta name="description" content="...">
...

### Next Steps
[Prioritized action list]
```
