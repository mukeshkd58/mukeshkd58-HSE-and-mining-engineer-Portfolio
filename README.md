# Mukesh Kumar Dharani – Portfolio Website

Static site built with HTML, CSS and vanilla JavaScript. No framework, no build step, no external dependencies.

## Structure
```
index.html
css/style.css
js/script.js                      (project content lives in the PROJECTS array)
assets/
  Mukesh_Kumar_Dharani_HSE_Mining_Engineer_CV.pdf
  images/profile.jpg
  images/projects/                (screenshots taken from your public repos)
  certificates/                   (add certificate images here if you want to show them)
```

## Run locally
Open `index.html` in a browser, or serve the folder:
```
cd portfolio
python3 -m http.server 8000
```
Then visit http://localhost:8000

## Deploy to GitHub Pages
1. Create a repository (for example `mukeshkd58.github.io` or `portfolio`) and push these files to the `main` branch.
2. In the repository go to Settings → Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`.
3. After a minute the site is live. All paths are relative, so it works from a sub-path too.
4. Once you have a domain, put it in the `<link rel="canonical">` tag in `index.html`.

Netlify or Cloudflare Pages also work: drag the folder in, no build settings needed.

## Things you can update
- **Projects:** edit the `PROJECTS` array in `js/script.js`. Add `image: "assets/images/projects/name.jpg"` when you have a screenshot, and add a `demo` link only when a live demo really exists.
- **NEBOSH certificate:** add the completion date and a verification link in the Certifications section of `index.html`.
- **Contact form:** it opens the visitor's email app (mailto). To receive messages directly, connect a form service such as Formspree or Web3Forms by changing the form `action`; never put secret keys in client-side code.
- **Resume:** replace the PDF in `assets/` using the same filename.
