# system.md — Persistent Session Memory

This file is loaded at the start of **every** opencode session. It is the project's persistent
memory: use it to carry context between sessions so work is never lost.

## Instructions to the agent

1. **Read this file first** before doing any work in a session.
2. **Follow memory**: recent tasks, decisions, and open items below are ground truth unless the user
   says otherwise.
3. **Update memory at the end of the session** (or when a task finishes): append to the session log
   with the date, what changed, and the final state. Keep entries concise and factual.
4. **Do not remove** prior history unless it is clearly stale (more than a handful of sessions old) —
   prefer appending.

---

## Project summary

- **What**: Static resume portfolio landing page for Jane Doe (placeholder identity).
- **Stack**: Plain HTML + CSS + JS. No build step, no frameworks. One page at `index.html`.
- **Structure**: assets split into `assets/css/style.css`, `assets/js/main.js`, `assets/resume.pdf`.
- **Hosting**: GitHub repo `kagwangkaman/portfolio`, served via static hosting (Vercel / GitHub Pages).
- **Identity placeholder**: `Jane Doe`, `jane.doe@example.com`, `+1 (555) 123-4567`,
  `Metro Manila, Philippines`, `in/janedoe`. Replace all occurrences to personalize.

## Key decisions

- Hero is a two-column layout: text left, portrait image container right (SVG placeholder avatar
  inside a gradient portrait frame, floating "8+ Years of Experience" badge).
- Removed standalone "Download PDF" / "Save as PDF" buttons outside the resume section (kept only the
  resume bar's Open/Download actions).
- Pushed via force push because the initial GitHub web upload commit had no shared history with local.

## Open items / next steps

- Replace the SVG portrait placeholder with a real photo (`assets/images/portrait.jpg`) if desired.
- Personalize the placeholder identity (name, contact, experience, education, skills).

---

## Session log

<!-- Append new entries at the bottom, most recent first. Format:
### YYYY-MM-DD
- what changed / decided / remaining
-->

### 2026-07-31
- Added opencode.md (credential/secret safety rules), system.md (persistent memory), and opencode.json registering both as instructions.
- Added .gitignore covering .env, keys, and OS/editor noise.
- Reorganized structure: extracted styles to assets/css/style.css, scripts to assets/js/main.js, moved resume.pdf to assets/resume.pdf. Updated index.html links and README.
- Pushed hero with portrait image container (SVG placeholder avatar, gradient frame, floating "8+ years" badge).
- Made the page fully responsive: nav wraps to a second scrollable row on mobile, stacked hero + reduced sizes at 900/640/480px breakpoints, overflow clipped.
- Disabled zoom: viewport user-scalable=no, touch-action: manipulation, text-size-adjust 100%.
- Remaining: replace SVG portrait with real photo (assets/images/portrait.jpg); personalize placeholder identity.

