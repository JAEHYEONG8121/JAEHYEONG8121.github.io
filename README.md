# Jaehyeong Lee — Personal Academic Website

A lightweight one-page academic site designed for GitHub Pages.

## Before publishing

Search `index.html` and replace:

- `YOUR_EMAIL@snu.ac.kr`
- `YOUR_GITHUB`
- Google Scholar `href="#"`
- placeholder publication titles / authors / paper links
- profile placeholder, if desired

## Add a profile photo

1. Put your image at `assets/profile.jpg`.
2. In `index.html`, replace this block:

```html
<div class="portrait-placeholder">
  <span>JL</span>
</div>
```

with:

```html
<img class="profile-photo" src="assets/profile.jpg" alt="Jaehyeong Lee" />
```

3. Add this to `style.css`:

```css
.profile-photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 12px;
}
```

## Publish with GitHub Pages

1. Create a public GitHub repository named `<your-github-id>.github.io`.
2. Upload `index.html`, `style.css`, `script.js`, and the `assets` folder to the repository root.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Your site will be available at `https://<your-github-id>.github.io/`.

