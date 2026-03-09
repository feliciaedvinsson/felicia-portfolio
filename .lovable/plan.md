

## Changes

1. **Update burgundy accent color** from `#722F37` to `#66001F` across all CSS variables and any hardcoded references.

2. **About Me section updates:**
   - Add a placeholder image area (for Felicia's photo) alongside the bio text, using a side-by-side layout on desktop.
   - Add a "Ladda ner CV" (Download CV) button in the About Me section.

### Files to modify
- `src/index.css` — Update HSL values for the burgundy accent
- Any components with hardcoded `#722F37` or its HSL equivalent
- `src/components/AboutSection.tsx` — Add image placeholder + CV download button, restructure layout to two-column on desktop

