# Vaccination Digital Service: our roadmap

A public, accessible roadmap for the Vaccination Service at
[Digital Health and Care Wales (DHCW)](https://dhcw.nhs.wales/).
It shows what we are working on across vaccination services in Wales, and where
we are heading.

**Live site:** https://dhcw-digital-health-and-care-wales.github.io/DHCW-Vaccines-Roadmap/

> **Draft for discussion.** This roadmap shows direction and priorities, not
> firm commitments. It carries no dates. Now is the firmest; Later is the most
> likely to change as we learn.

## Who it is for

Anyone with an interest in digital vaccination services in Wales: the people who
use these services, the teams who deliver them, partners and suppliers.

## Context for this service

Our vision is every vaccination given in Wales to be recorded once, used
wherever it is needed, and to help protect the people who need protecting most.

We help Wales to deliver efficient, data-driven vaccination services by
providing a near real-time, user-centred immunisation service that streamlines
data management, enhances citizen access, and supports informed decision-making.

## How it is structured

The roadmap has two axes:

- **Service category**: Vaccination Digital Service.
- **Three horizons** within each category:
  - **Now** is work we are actively doing. It is well understood and underway.
  - **Next** is what we expect to pick up. It is direction, and it may change.
  - **Later** is the direction we are setting. It is deliberately high level.

The further out the work, the more it may change. We do not put dates on the
roadmap, and Next and Later are not commitments to deliver by a particular time.

## Giving feedback

This is built in the open and feedback is welcome. Please
[open a roadmap feedback issue](https://github.com/DHCW-Digital-Health-and-Care-Wales/DHCW-Vaccines-Roadmap/issues/new?template=roadmap-feedback.md).

## How often it is updated

We update this roadmap regularly as our plans develop. The site shows a
"last updated" date, and the content is edited in one place
(`src/data/roadmap.ts`).

## Bilingual

The site is built to serve Welsh and English. All display text is language-keyed
and a language toggle is provided. English is the working content for this pass;
where a Welsh string is not yet provided the site falls back to English. The
default language can be switched in one place (`DEFAULT_LANGUAGE` in
`src/lib/i18n.ts`).

## Accessibility and privacy

- We aim to meet WCAG 2.2 AA. See the accessibility statement on the site.
- The site sets no tracking cookies, uses no third-party analytics and
  self-hosts its fonts, so there is nothing to consent to. See the privacy note
  on the site.

## Editing the roadmap content

All content lives in [`src/data/roadmap.ts`](./src/data/roadmap.ts). Updating the
roadmap is a content edit there, not a code change. Each item has a title,
summary, category, horizon and status. Add Welsh by filling in the `cy` field
next to each `en` field.

## Running and building locally

Requires [Node.js 20](https://nodejs.org/) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the development server
npm run build    # type-check and build for production into dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
npm run format   # format with Prettier
```

## Deployment

The site deploys to GitHub Pages from `main` via the workflow in
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). The Vite base
path is set for this project page deployment route (`/DHCW-Vaccines-Roadmap/`).

> **Repository setting required:** in **Settings -> Pages**, set the source to
> **GitHub Actions** for deployments to run.

## Design source

The look and feel is based on the Figma Make export in
[`figma-make-export/`](./figma-make-export/), reconciled to this project's
structure and data model. That folder is a design reference only and is not part
of the application build.

## Licence

- **Code:** [MIT](./LICENSE)
- **Content:** [Open Government Licence v3.0](./CONTENT-LICENCE.md)
