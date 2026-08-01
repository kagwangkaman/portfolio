# Resume Portfolio Landing Page

A simple, bright, professional landing page that turns a resume into a shareable online portfolio. Built for employees, educators, and anyone job hunting — no build step, no frameworks, one HTML file.

## What's inside

```
.
├── index.html              # The portfolio page (content markup)
├── assets/
│   ├── css/style.css       # All page styles
│   ├── js/main.js          # Small scripts (footer year, scroll-spy nav)
│   ├── images/             # Photos (e.g. portrait.png)
│   └── resume.pdf          # Your resume. Swap it with your own file
└── README.md
```

> Local-only developer files (kept out of Git): `opencode.json`, `opencode.md`, `system.md` — opencode's project config, agent rules, and persistent session memory.

## How to make it yours

Open `index.html` in any text editor and search for the placeholder text below to replace it.

### 1. Name and title
Search for `Jane Doe` and `Fresh Graduate` — replace both with your name and job title. There are several occurrences; update them all (nav, hero, footer).

### 2. Summary and About
Replace the `summary` paragraph in the hero and the text in the **About** section with your own introduction.

### 3. Contact info
Update these lines in the Contact section:
- `jane.doe@example.com`
- `+63 917 123 4567`
- `Metro Manila, Philippines`
- `https://www.linkedin.com/in/janedoe`

### 3b. Portrait (optional)
Replace `assets/images/portrait.png` with your own photo and update the `<img>` src in `index.html` if you change the filename.

### 4. Experience
Edit the timeline entries: role, school/organization, dates, and bullet points. To add a role, copy one `.timeline-item` block and paste it below the last one.

### 5. Education
Edit the degree, school, and years in the **Education** section. To add more schools, copy an `.edu-card` block inside the `.edu-cards` container.

### 6. Skills
Add or remove chips inside each `.skill-group`. To add a group, copy a full `.skill-group` block.

### 7. Accent color (optional)
The whole page uses one accent color defined at the top of `assets/css/style.css`:

```css
:root {
  --accent: #2563eb;   /* change this to recolor the whole page */
}
```

### 8. Upload your resume
Replace `assets/resume.pdf` with your own file **named exactly** `resume.pdf`. The page detects the file automatically and shows it in the built-in viewer. If the file is missing, visitors see a clean "Resume coming soon" note instead of a broken box.

> Tip: If you have a Google Docs/Drive resume, export it as a PDF and name it `resume.pdf`.

## Run locally

Just double-click `index.html` — or serve it with any static server:

```bash
npx serve .
```

## Deploy on Vercel (recommended)

1. Push this folder to a GitHub repository (e.g. under your `kagwangkaman` account).
2. Go to [vercel.com](https://vercel.com) and click **Add New > Project**.
3. Import the repository.
4. Framework Preset: **Other** (leave build command and output directory empty).
5. Click **Deploy**. Vercel serves `index.html` at the root and `resume.pdf` at `/assets/resume.pdf`.

Every push to the repository redeploys automatically.

## Update the page later

- To change content: edit `index.html` and push.
- To change your resume: replace `resume.pdf` and push.
