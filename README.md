# Siddhi Energy website

This is a lightweight, static marketing website for Siddhi Energy. It does not need a server, database, or build process, so it can be published directly with GitHub Pages.

## Project structure

```text
.
├── index.html          # Website content and page structure
├── css/
│   └── styles.css      # Responsive styling
├── js/
│   └── app.js          # Language picker, mobile menu, tabs, form behavior
└── assets/
    └── images/         # Website photos, product images, and logo
```

## Publish on GitHub Pages

1. Create a new empty GitHub repository, for example `siddhi-energy-website`.
2. Upload every file and folder in this directory to the **root** of that repository. Do not upload the parent `outputs` folder.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. GitHub will show the public website address after it finishes deploying.

## Before publishing

Confirm the contact information, prices, address, WhatsApp number, social links, and all images are final. The main contact settings are in `index.html` and `js/app.js`.

## Local preview

Open `index.html` in a modern browser. For a closer match to a live website, serve this folder with any simple local web server.
