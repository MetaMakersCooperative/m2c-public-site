This is the public site for the Meta Makers Cooperative makerspace.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

## Dev Containers

You can run this repository inside a dev container.  However, for fast reload on save, it's better to install nvm and yarn and then run the repository locally instead.