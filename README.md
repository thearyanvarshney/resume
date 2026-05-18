# Aryan Varshney Web Resume

Interactive Business Analyst web resume built with Vite and Three.js.

## Local Preview

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload/push this project to the repository.
3. Go to repository `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to `main` or `master`.
6. GitHub Actions will build and deploy the site automatically.

The `Download Resume` buttons point to the Google Drive resume link, so replacing the file in Drive keeps the website resume download current.

## Contact Form

The contact form opens a prefilled email draft to `aryan.varshney94@gmail.com` with a subject based on the selected reason.

This avoids third-party form downtime and works on GitHub Pages without a backend. The visitor only needs to send the draft from their email app.
