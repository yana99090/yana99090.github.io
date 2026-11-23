# Yana Patel — Portfolio

Live at **https://yana99090.github.io**

My developer portfolio, built from scratch with **HTML, CSS and vanilla JavaScript**, with no frameworks and no build step.

The layout is based on the *vav*, the stepwells of Gujarat. Each section sits one level deeper, from the surface down to the water at the bottom.

## Folder structure

```
index.html               the page
css/style.css            all styles
js/script.js             project filter + footer year
images/                  icons, logo, stepped dividers, share image
fonts/                   Bricolage Grotesque, JetBrains Mono (self-hosted, SIL Open Font License)
Yana_Patel_Resume.pdf    resume behind the "Download resume" button
```

## How the code is organised

- Every section follows `section.name > .container (1140px) > .row > .col-md-* > .signature-text`
- Headings and paragraphs are styled once at tag level (`body h2`, `body p`), then adjusted per section
- Buttons: `.theme-btn` (filled) and `.second-btn` (outline), each an `<img>` icon + `<span>` label
- Stepped dividers between levels and the water ripples are drawn with `::before` / `::after`
- CSS rules followed: no negative values, no percentage padding, no fixed heights, no CSS variables, no `gap`, no screen-size media queries (the layout stays fluid with flex-wrap)

## Updating

To add a project, copy one `<div class="col-md-6" data-cat="…">` block in the Projects section and set `data-cat` to `web`, `ai` or `data`. The filter counts update by themselves.
