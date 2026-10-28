# Page audit: Pratibha Sharma portfolio

Source of truth: resume details supplied in the project request. No resume PDF was present in the `portfolio` folder.

| Content item | Verification status | Evidence or action required |
| --- | --- | --- |
| Name | Verified | `index.html` heading, logo, title, and footer use “Pratibha Sharma” only. |
| Contact details | Verified | Email `spihu1502@gmail.com` with `mailto:spihu1502@gmail.com`. Phone `9352768188` shown as `+91 93527 68188` with `tel:+919352768188`. Location Jaipur, Rajasthan. |
| About section | Verified | About copy uses only degree, university, location, study period, skills, and the two named projects. No invented work history. |
| Skills | Verified | Programming languages, core concepts, tools, and coursework match the resume lists. |
| Project: UPI Shield | Verified | Description, features, technologies, and 2024 certificate note match the resume. Repository/demo marked PLACEHOLDER. |
| Project: MediQR | Verified | Description, features, and technologies match the resume. Repository/demo marked PLACEHOLDER. |
| Education | Verified | B.Tech in Computer Science and Engineering, JECRC University, Jaipur, Rajasthan, 2025–2029. |
| Certificates | Verified | UPI Shield Certificate (2024) and Cyber Sangam Event Certificate (2024) only. |
| External links | Verified | Working internal hashes (`#home`, `#about`, `#skills`, `#projects`, `#education`, `#achievements`, `#contact`). LinkedIn uses the supplied profile URL `https://www.linkedin.com/in/pratibha-sharma-a546a63a8`. Email and phone links are present. No fabricated GitHub or project URLs. |
| Responsive design | Verified | Desktop layout shows the full navigation at 1280px. Mobile layout shows a hamburger menu; the menu opens, closes, and Projects navigation updates the URL to `#projects`. CSS breakpoints exist for tablet and small phone. |
| Remaining placeholders | Verified | `PLACEHOLDER` remains for GitHub profile and for UPI Shield / MediQR repository and live demo URLs. |
| HTML validation | Pending | Open `index.html` at [https://validator.w3.org/nu/](https://validator.w3.org/nu/) and confirm there are no errors. This was not submitted to the W3C checker from this session. |
| CSS and JavaScript paths | Verified | `index.html` links `style.css` and `script.js` in the same folder. Browser load showed 1 stylesheet and 1 script. |
| Section IDs | Verified | `home`, `about`, `skills`, `projects`, `education`, `achievements`, `contact` all exist and match navigation. |
| Accessibility | Verified | Skip link, semantic landmarks, labelled menu button, `:focus-visible` styles, and `prefers-reduced-motion` rules are present. Contrast is cream/ink/gold on a light background. |
| Missing assets | Verified | No image files are referenced. Visuals are CSS-only (monogram and project banners). |

## Remaining tasks

1. Replace GitHub `PLACEHOLDER` with a real profile URL if you have one.
2. Replace project repository and live demo `PLACEHOLDER` text with real links if they exist.
3. Confirm the LinkedIn URL in a browser (tracking parameters were removed from the supplied share link).
4. Validate HTML at https://validator.w3.org/nu/.
5. Optionally add a resume PDF to the project later and link it; none was available at build time.
