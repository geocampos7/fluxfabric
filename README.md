# FluxFabric

Personal blog by Mario Geovanny Campos — AI infrastructure and network fabric design.

Live at: https://fluxfabric.net

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Markdown** posts via gray-matter + remark
- **Vercel** for hosting

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Writing a New Post

1. Create a new `.md` file in the `/posts` directory
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2026-05-22"
tag: "DC Fabric Design"
readTime: "6 min read"
excerpt: "One sentence summary shown in post listings."
---

Your content here in Markdown...
```

3. Save the file — the post appears automatically on the blog

## Deployment

Push to GitHub → Vercel auto-deploys.

## Project Structure

```
fluxfabric/
├── app/
│   ├── layout.tsx        # Root layout, metadata
│   ├── page.tsx          # Home page
│   ├── globals.css       # Theme variables, global styles
│   └── blog/
│       ├── page.tsx      # Blog index
│       └── [slug]/
│           └── page.tsx  # Individual post
├── components/
│   ├── Navbar.tsx        # Nav with theme toggle + mobile menu
│   └── ThemeScript.tsx   # Prevents theme flash on load
├── lib/
│   └── posts.ts          # Markdown file reader
└── posts/
    └── *.md              # Your blog posts live here
```
