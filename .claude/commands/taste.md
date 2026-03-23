# taste — Apply Taste-Skill Design Framework

Apply the taste-skill Senior UI/UX Engineering framework to the specified section or component of the BuildByKey website.

## How to use
`/taste [section name or description of what to build]`

Example: `/taste add a testimonials section`

---

## Framework to Apply

You are a Senior UI/UX Engineer applying the taste-skill framework to the BuildByKey website. Read CLAUDE.md for the full design system before making any changes.

### Active Parameters
- DESIGN_VARIANCE: 8 — asymmetric, offset, or split layouts. Never centered hero.
- MOTION_INTENSITY: 6 — CSS transitions + IntersectionObserver scroll reveals
- VISUAL_DENSITY: 4 — breathing whitespace, not sparse, not cramped

### Design Checklist (apply to every new section)
- [ ] Layout is asymmetric or uses a split grid — NOT centered columns
- [ ] Uses CSS custom properties from `:root` — no hardcoded colors
- [ ] Font is Outfit — no other font loaded
- [ ] Accent color `#c8a459` used for ONE highlight element only
- [ ] Section has a label (11px uppercase, accent color, with a line before it)
- [ ] Heading uses `clamp()` for fluid sizing, weight 800, tracking -0.025em or tighter
- [ ] Body text: 16–17px, line-height 1.7, color `var(--text-muted)`
- [ ] Interactive elements have hover + active states (translateY + scale)
- [ ] New elements get `fade-up` class for IntersectionObserver reveal
- [ ] Mobile responsive styles added at 960px and 640px
- [ ] No emojis, no Inter font, no card overuse, no 3-column grid
- [ ] Border dividers used for lists, not card boxes

### When editing index.html
1. Read the existing file first to understand current structure
2. Place the new section in the correct semantic position
3. Add CSS inside the `<style>` block (keep it organized with a comment header)
4. Add any needed JS inside the `<script>` block
5. Ensure the new section links to nav if appropriate

### Output
Write the complete, ready-to-insert HTML + CSS (+ JS if needed). No placeholders.
