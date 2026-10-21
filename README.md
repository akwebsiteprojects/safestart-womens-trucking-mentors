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
| `images/` | The photos used across the pages |

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
- `FORM_ENDPOINT` — messages are sent through FormSubmit (formsubmit.co), which forwards each one to `CONTACT_EMAIL`. The first submission after going live sends an activation email to that address; click its link once. If you change `CONTACT_EMAIL`, the new address has to be activated the same way.
- `VIDEOS` — add YouTube video ids here and the Videos page swaps the "Coming soon" cards for real players.

## Before publishing
- Confirm the founder's public name (currently Sandra Williams).
- Confirm the public contact email. `sandraw0064@gmail.com` is used for the form and has not been confirmed as the business's public address.
- Confirm the operating province and the exact services and scope. The site describes mentorship and career guidance, not certified driver training.
- Phone number, website address and social media handles are not shown because only placeholder values were available. Add them once real ones exist.
- Confirm you have permission to use every photo in `images/`, including from the people shown in them.
- Confirm the person in the Home hero photo (`images/truck-hero.jpg`) is happy for it to be used on the site.
- Add a short privacy notice: enquiries now pass through FormSubmit, a third-party service, on their way to the inbox.
