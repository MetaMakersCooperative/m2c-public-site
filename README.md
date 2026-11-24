This is the public site for the Meta Makers Cooperative makerspace.

## Getting Started

Install nvm, git and your preferred IDE (e.g., VS Code). Install yarn with:

```bash
npm install --global yarn
```

Initialize packages with:

```bash
yarn install
```

To start the development server, run:

```bash
yarn dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To compile the project, run:

```bash
yarn build
```

## Frameworks

To learn more about the frameworks used in this repository, take a look at the following resources:

- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) is a free static site hosting service that allows you to build and host a website directly from a repository on GitHub. The public site is hosted on GitHub pages.
- [Next.js](https://nextjs.org/docs) is an open-source, full-stack React framework that provides building blocks and structure for creating fast, high-performance web applications.  This repo uses the app router and static site generation.
- [Chakra UI](https://chakra-ui.com/docs/components/concepts/overview) is a simple, modular, and accessible component library for React that allows developers to build modern, responsive web applications quickly.  This repo uses Chakra components as the primary style library/framework.
- [Next Image Export Optimizer](https://github.com/Niels-IO/next-image-export-optimizer) is a third-party library that enables image optimization at build time. All image files in the "/public/images" directory will be processed when you run "yarn build" to create optimized file sizes and blurred placeholder images in the "./generated" folder (relative to the original image location).
- [Image Magick](https://imagemagick.org/#gsc.tab=0) can be used to convert from jpg or heic files into webp files by running a command such as "magick mogrify -format webp *.jpg" or "magick mogrify -format webp *.HEIC".
- [Formspree](https://formspree.io/) is currently used for form processing, but in the future we will likely switch to directus or a custom backend api.

## Content Management (Pages CMS)

Some site content is managed with [Pages CMS](https://pagescms.org/), a Git-based CMS that edits files in this repository and commits the changes. Sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and open this repository. The configuration lives in [.pages.yml](.pages.yml).

| Content  | Files                  | Loaded by                 |
| -------- | ---------------------- | ------------------------- |
| Zones    | `content/zones/*.json` | `src/data/zones.ts`       |
| Sponsors | `content/sponsors.json`| `src/data/sponsors.ts`    |
| FAQ      | `content/faq.json`     | `src/data/faq.ts`         |
| Classes & Events | `content/events/*.json` | `src/data/events.ts` |

The remaining content (facility, membership, navigation) is still hardcoded in `src/data/*.ts`.

FAQ questions appear on the FAQ page in the order they are listed, and questions marked **Featured** also appear on the Contact page. A question's deep link (e.g. `/faq#how-do-i-become-a-member`) is based on its wording, so rewording a question changes its link.

Zones are listed in ascending order of their `order` field. A zone's file name comes from its slug, which is also its page URL (e.g. `woodworking` → `/woodworking`).

### Classes & Events

Each class or event is one file in `content/events`, named after its slug, and gets a page at `/events/<slug>`. Enter dates as local Windsor time. For a class with several sessions, add the later dates under **Additional sessions**.

Cards appear on the Classes page (upcoming first, then past), on the home page (the next 4) and on the page of each zone the event is tagged with. The site works out an event's state in the visitor's browser, so events move from upcoming to in progress to past without a rebuild:

| State | When | Card | Event page |
| ----- | ---- | ---- | ---------- |
| Upcoming | Before the first session | **Register** button | Embedded Zeffy form |
| Sold out | Upcoming with **Sold out** checked | Disabled "Sold out" button | Event info with a "sold out" notice |
| In progress | From the first session's start until the last session ends | Highlighted, disabled "In progress" button | Event info with a "registration closed" notice |
| Past | After the last session ends | Shows the event photos, **View photos** / **Read more** button | Event info, recap and photo gallery (sections without content are hidden) |

An upcoming event with no **Zeffy URL** shows "Registration soon" and its page shows the event info. Paste the normal Zeffy link (e.g. `https://www.zeffy.com/en-CA/ticketing/my-class`): the site converts it to the embed URL.

After an event, add the **Event photos** and a **Recap / blog** to it. The first photo replaces the card image in the past events section.

### Images

Pages CMS has two media libraries:

- **Images (optimized)**: uploads go to `public/images` and are stored in content as `/images/...`. Use these for anything rendered with `<ExportedImage>` (zone images, benefits, facility photos).
- **Logos**: uploads go to `public/logos` and are served as-is, without optimization.

Here is how an uploaded image reaches the site:

1. An editor uploads an image such as `beach.jpg` in Pages CMS, which commits it to `public/images/`.
2. The commit to `main` triggers the GitHub Action ([.github/workflows/nextjs.yml](.github/workflows/nextjs.yml)), which runs `yarn build` (`next build && next-image-export-optimizer`). This creates the resized WebP versions in the `out` folder.
3. `<ExportedImage src={zone.image} ... />` renders the `srcset`, and the site deploys to GitHub Pages.

You don't need to convert or optimize images before uploading them, and you don't need to commit the generated images.

## Dev Containers

You can run this repository inside a dev container.  However, for fast reload on save, it's better to install nvm and yarn and then run the repository locally instead.