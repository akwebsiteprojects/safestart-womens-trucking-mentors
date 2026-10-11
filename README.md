# SafeStart Women's Trucking Mentors — website (Version 2)

Static, responsive, multi-page website. No build step and no dependencies.

## Files
| File | What it is |
| --- | --- |
| `index.html` | Home |
| `about.html` | About (mission, vision, founder story) |
| `faqs.html` | FAQs |
| `videos.html` | Videos |
| `contact.html` | Contact |
| `styles.css` | Design for every page |
| `script.js` | Menu, contact form, videos, scroll animation |
| `images/` | The five photos used across the pages |

Every page has the contact form. The seven files and the `images` folder must sit together in the same folder.

## Open locally
Double-click `index.html`.

## Publish on GitHub Pages
1. Upload the seven files and the `images` folder to the repository (keep the name `index.html`).
2. In the repository go to **Settings → Pages**.
3. Under **Branch** choose `main` and `/ (root)`, then **Save**.
4. After a minute or two the site is live at `https://akwebsiteprojects.github.io/safestart-womens-trucking-mentors/`.

## Settings (top of `script.js`)
- `CONTACT_EMAIL` — where form messages go.
- `FORM_ENDPOINT` — empty by default, so the form opens the visitor's email app with the message filled in. To receive messages straight to an inbox, create a free form at formspree.io and paste its URL here.
- `VIDEOS` — add YouTube video ids here and the Videos page swaps the "Coming soon" cards for real players.

## Before publishing
- Confirm the founder's public name (currently Sandy Williams).
- Confirm the public contact email. `sandraw0064@gmail.com` is used for the form and has not been confirmed as the business's public address.
- Confirm the operating province and the exact services and scope. The site describes mentorship and career guidance, not certified driver training.
- Phone number, website address and social media handles are not shown because only placeholder values were available. Add them once real ones exist.
- Confirm you hold a licence for the five photos in `images/` (they look like stock photography).
- Two remote Unsplash images remain (truck on the Home hero, open road in the founder section). Replace them with licensed photos, ideally a real photo of the founder.
- Add a privacy notice if you start collecting enquiries through a form service.
