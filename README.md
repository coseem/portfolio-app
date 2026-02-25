# Portfolio App

Simple portfolio website built with HTML, CSS, and JavaScript, served by a small Express server for easy Railway deployment.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Push to GitHub

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio website"
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Railway

1. Log in to [Railway](https://railway.com/)
2. Click **New Project** -> **Deploy from GitHub repo**
3. Select this repository
4. Railway auto-detects Node.js and runs `npm start`
5. Open generated Railway domain from the project dashboard
