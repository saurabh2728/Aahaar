# Aahaar

This is the Aahaar frontend project (based on TanStack / Vite starter).

## Quick start

Requirements:
- Node.js (v18+ recommended)
- npm

Install dependencies:

```powershell
npm install
```

Start development server (opens on a local dev URL):

```powershell
npm run dev
```

Build for production:

```powershell
npm run build
```

Preview production build locally:

```powershell
npm run preview
```

## Pushing to GitHub

1. Create a new repository on GitHub (via website or `gh repo create`).
2. Add remote and push:

```powershell
git init
git add .
git commit -m "chore: initial commit"
# replace <your-remote-url> with the repository URL GitHub provides
git remote add origin <your-remote-url>
git branch -M main
git push -u origin main
```

If you prefer to use the GitHub CLI (`gh`):

```powershell
gh repo create <repo-name> --public --source=. --remote=origin --push
```

## Notes
- This project uses Vite and Cloudflare Wrangler configuration for server-side rendering. See `wrangler.jsonc` and `vite.config.ts` for more details.
