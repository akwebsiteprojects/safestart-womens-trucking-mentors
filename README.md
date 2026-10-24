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

## Contact form
Every page has the contact form. When a visitor clicks **Send message**, their own email app opens with a new email to `safestartmentors@gmail.com`, already filled in with their name, email, phone, interest, the page they were on and their message. They press Send in their email app to finish. No form service or account is involved.

To change the receiving address, replace `safestartmentors@gmail.com` in all five `.html` files.

## Settings (top of `script.js`)
- `VIDEOS` — add YouTube video ids here and the Videos page swaps the "Coming soon" cards for real players.

## Before publishing
- Confirm the founder's public name (currently Sandra Williams).
- Confirm `safestartmentors@gmail.com` is the address you want shown publicly on every page.
- Confirm the operating province and the exact services and scope. The site describes mentorship and career guidance, not certified driver training.
- Phone number, website address and social media handles are not shown because only placeholder values were available. Add them once real ones exist.
- `images/og-image.jpg` is the picture shown when a link to the site is shared (Facebook, LinkedIn, WhatsApp, iMessage, X). To change it, replace that file with another 1200×630 JPG of the same name.
- Confirm you have permission to use every photo in `images/`, including from the people shown in them.
- Confirm the person in the Home hero photo (`images/truck-hero.jpg`) is happy for it to be used on the site.
