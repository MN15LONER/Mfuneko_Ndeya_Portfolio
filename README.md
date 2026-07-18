# Portfolio v2 — setup notes

## Folder structure
```
/index.html                  ← homepage
/projects/project.html       ← single template that renders EVERY project page
/assets/css/style.css        ← all styles + animations
/assets/js/projects-data.js  ← ALL project content lives here
/assets/js/main.js           ← scroll reveal, lightbox, hero terminal, grid render
/media/                      ← your images & videos go here (same as before)
```

## To deploy on GitHub Pages
1. Copy your existing `/media` folder (all your project images/videos) into this new `/media` folder — the filenames referenced in `projects-data.js` match what was in your old single-page site, so nothing needs renaming.
2. Add a real thumbnail for FluentEdge at `media/FluentEdgeThumbnail.png` (placeholder path is already wired up — just drop the file in). Same for its `gallery` array if you want more shots later.
3. Push the whole folder to your GitHub Pages repo, replacing the old single `index.html`.
4. `index.html` stays as the homepage — that's what Pages will serve by default. Project pages live at e.g. `yoursite.com/projects/project.html?slug=fluentedge`.

## How to add a new project (the whole reason this is data-driven)
Open `assets/js/projects-data.js`, copy any existing object, and change:
- `slug` — must be unique, used in the URL
- `name`, `kicker`, `blurb`, `description`, `tags`
- `thumb` — path to the card image
- `gallery` — array of `{ type: "image" | "video", src: "media/..." }`
- `links` — array of `{ label, url }` (leave empty array if none yet)
- `specs` — small key/value list shown on the detail page (role, stack, status, etc.)

That's it — no new HTML file needed. It'll automatically show up in the homepage grid and get a working detail page with next/prev navigation.

## What changed from the old single-page version
- Each project now has its own dedicated page (gallery, full description, specs, next/prev nav) instead of just a card.
- Terminal-style hero with a typed boot sequence referencing Project Me, instead of a generic headline — this is the one "loud" design element; everything else stays quiet on purpose.
- Scroll-reveal animations, hover lift on cards, and a horizontal skills marquee.
- New amber/graphite palette instead of the cyan-on-navy look (that combo is one of the most common AI-portfolio defaults — this makes yours read as yours).
- Design tokens (colors, fonts, spacing) are all CSS variables at the top of `style.css` — easy for Cursor to retheme later if you want to iterate further.

## Good next steps for Cursor
- Swap in real photography/screenshots once ready (design and layout are intentionally decoupled from final media).
- Consider adding an "Experience" or "Now" section between About and Projects if you want to show Project Me / trading work more prominently — Jacob's site does this well with a timeline.
- Optional: replace the query-param routing with real per-project HTML files later if you want project pages indexed individually by Google (better SEO) — the current setup is easier to maintain but query strings are weaker for SEO.
