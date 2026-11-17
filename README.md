# ASP Global — Premium Global (Option 2)

React + Vite single-page website.

## Run
Install Node.js 20.19+ or 22.12+, then:

```bash
npm install
npm run dev
```

Open the address shown in the terminal.

## Build for hosting
```bash
npm run build
npm run preview
```

Upload the contents of dist/ to your static hosting provider.

## Edit
- src.jsx: content, React components, product categories and enquiry form.
- style.css: responsive styling, animations and colours.
- animations.css: all motion (hero slideshow, marquee, reveals, route map).
- public/asp-logo.png: company logo.
- index.html: page title and description.

Century Gothic displays where installed; otherwise a fallback is used. A licensed webfont is needed for consistent typography across devices.
Photos load from Unsplash and require internet access. Replace with approved client imagery for final launch.
The enquiry form prepares an email in the visitor's email app. It does not send email through a backend. Phone and WhatsApp links use the supplied company number.
