# Quantum Macaw

The Quantum Macaw cinematography site, rebuilt from PHP includes into a small React app (Vite + Bun).

## Running it

```bash
bun install
bun run dev       # http://localhost:3109
bun run build     # static site in dist/
bun run preview   # serve dist/ on http://localhost:3109
```

Installs wait a week before taking new package releases (`minimumReleaseAge` in `bunfig.toml`).

## Layout

| Path | What it is |
| --- | --- |
| `src/main.jsx` | Routes: `/`, `/portfolio`, `/about`, `/locate`, `/contact`, `/contact/info`, and a 404 for anything else |
| `src/components/Layout.jsx` | The nav and footer every page shares (was `php/nav.php`, `php/footer.php` and `js/nav.js`) |
| `src/pages/` | One component per old `index.php` |
| `src/styles/` | The original stylesheets. Each page's CSS is scoped with `:where(.page-NAME)` so it only applies on that route, without changing specificity |
| `public/` | Images, fonts and the favicon, at the same URLs as before |
| `design/profile.psd` | Source artwork that used to sit in `about/img/` |

## Changes from the PHP site

The pages render the same as the PHP version: element positions and computed styles were compared at 375, 800 and 1440px wide. Beyond that:

- **No jQuery, Modernizr or Google Analytics.** React state replaces the jQuery menu toggle. The `UA-` Analytics property is retired, so its tag was dropped.
- **Links stay on the site.** The nav used to point at `http://quantummacaw.com/...`. It now uses router links, and the menu closes after you pick a page.
- **`/contact/info` has its nav and styles.** Its includes pointed at `../php/`, which from that folder doesn't exist, so the old page rendered bare.
- **The contact form still doesn't send anything.** That's unchanged: "Continue" goes to `/contact/info` and "Done" goes home.
- **Portfolio videos aren't in the repo.** They never were. Put the `.mp4` files in `public/portfolio/mp4/` (the names are in `src/pages/Portfolio.jsx`) and the player will pick them up.
- **The 404 page is a route.** It replaces `404.html`.

## Deploying

`dist/` is a static single-page app. The host needs to serve `index.html` for unknown paths so deep links such as `/about` work, e.g. a catch-all rewrite to `/index.html`. `bun run preview` already behaves that way.
