# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Juan Sebastian — a Systems Engineering student and frontend/data developer. No build system or package manager; all dependencies loaded via CDN.

## Running Locally

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python -m http.server
```

## Architecture

Single-page site (`index.html`) with anchor-based navigation (`#about`, `#projects`, `#contact`). All content lives in one HTML file.

- [Css/styles.css](Css/styles.css) — custom styles layered on top of Bootstrap 5.3.2
- [Js/form.js](Js/form.js) — contact form handler using the EmailJS REST API via `fetch()`
- [Img/](Img/) — project screenshots and logo assets

**CDN dependencies**: Bootstrap 5.3.2, Google Fonts (Poppins), Font Awesome.

## Contact Form

The form in `index.html` submits to EmailJS. Credentials (service ID, template ID, public key) are embedded directly in [Js/form.js](Js/form.js). When modifying the form fields, keep the EmailJS template parameter names in sync.
