# HR Group wellness website

React, Tailwind CSS, Lucide React, and Vite landing page with a looping video hero, responsive navigation, five brand logos, and an integrated contact form.

## Local development

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Deploy later

Connect this repository to your static hosting provider and use:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`

For a manual deployment:

```sh
npm ci
npm run build
```

Upload the contents of `dist` to your host. Include its `assets`, `images`, and `contact` directories. The old `/contact/` and `/contact.html` URLs redirect to the contact section on the main page.

The Google font, background video, and four website favicons load from external URLs. The Little Rollers logo is included in `public/images`. Little Rollers stays unlinked until its website is available.

## Contact form

The public email is `office@hrgroup.id`. Form submissions use FormSubmit and go to `office@lrmcorporation.com`; the receiving inbox must complete FormSubmit's one-time activation. The form return URL currently points to the ChatGPT Site. If you deploy to a new domain, update the `_next` value in `src/App.jsx` to your new site URL followed by `/?sent=1#contact`.

`.openai/hosting.json` belongs to the existing ChatGPT Sites deployment and is not required by other static hosts.
