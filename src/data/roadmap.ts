/**
 * Single source of roadmap content (docs/BUILD_BRIEF.md Section 5).
 *
 * Updating the roadmap is a content edit here, not a code change. Every piece
 * of display text is language-keyed so Welsh and English are both supported.
 * Welsh values are left as clearly marked placeholders for now; the UI falls
 * back to English when a Welsh string is empty (see src/lib/i18n.ts).
 */

export type Horizon = 'now' | 'next' | 'later';
export type ItemStatus = 'exploring' | 'in-progress' | 'shipped';

/** Every piece of display text is language-keyed. */
export interface Localised {
  cy: string; // Welsh
  en: string; // English
}

export interface Category {
  id: string; // slug
  name: Localised; // formal theme name
  headline: Localised; // warm, outcome-led headline
  description: Localised;
  accent: string; // brand colour token for this theme
}

export interface RoadmapItem {
  id: string;
  title: Localised;
  summary: Localised;
  categoryId: string;
  horizon: Horizon;
  status: ItemStatus;
  services?: string[];
  updated: string; // ISO date, e.g. '2026-06-26'
}

export interface RoadmapMeta {
  title: Localised;
  intro: Localised;
  horizonNote: Localised;
  owner: string;
  lastUpdated: string; // ISO date
  reviewNote: Localised;
  statusLabel: string;
}

export interface Roadmap {
  meta: RoadmapMeta;
  horizons: { id: Horizon; label: Localised; definition: Localised }[];
  categories: Category[];
  items: RoadmapItem[];
}

// Welsh translations are outstanding. English is the working default for this
// pass; the UI falls back to English wherever a Welsh string is empty.
const TODO_CY = ''; // TODO: Welsh translation

export const roadmap: Roadmap = {
  meta: {
    title: {
      cy: TODO_CY,
      en: 'Vaccination Digital Service: our roadmap',
    },
    intro: {
      cy: TODO_CY,
      en: "Our vision is every vaccination given in Wales to be recorded once, used wherever it is needed, and to help protect the people who need protecting most. We help Wales to deliver efficient, data-driven vaccination services by providing a near real-time, user-centred immunisation service that streamlines data management, enhances citizen access, and supports informed decision-making.",
    },
    horizonNote: {
      cy: TODO_CY,
      en: 'Now is what we are actively working on. Next is what we expect to pick up. Later is the direction we are setting. The further out the work, the more it may change as we learn. We do not put dates on this roadmap, and Next and Later are not commitments to deliver by a particular time.',
    },
    owner: 'Vaccination Service, Digital Health and Care Wales',
    lastUpdated: '2026-07-15',
    reviewNote: {
      cy: TODO_CY,
      en: 'We update this roadmap regularly as our plans develop.',
    },
    statusLabel: 'Draft for Discussion',
  },

  horizons: [
    {
      id: 'now',
      label: { cy: TODO_CY, en: 'Now' },
      definition: {
        cy: TODO_CY,
        en: 'Work we are actively doing. It is well understood and underway. Items here can carry more detail.',
      },
    },
    {
      id: 'next',
      label: { cy: TODO_CY, en: 'Next' },
      definition: {
        cy: TODO_CY,
        en: 'What we expect to pick up next. It is direction, and it may change based on what we learn from the work happening now.',
      },
    },
    {
      id: 'later',
      label: { cy: TODO_CY, en: 'Later' },
      definition: {
        cy: TODO_CY,
        en: 'The direction we are setting. It is deliberately high level and will take shape as we get closer.',
      },
    },
  ],

  categories: [
    {
      id: 'vaccination-digital-service',
      name: { cy: TODO_CY, en: 'Vaccination Digital Service' },
      headline: {
        cy: TODO_CY,
        en: 'Recorded once, used wherever it is needed.',
      },
      description: {
        cy: TODO_CY,
        en: "This roadmap shows what we are working on in the Vaccination Service at Digital Health and Care Wales. We look after systems that record vaccinations, support community delivery, and hold linked information that helps protect people across Wales.",
      },
      accent: '#005AA8',
    },
  ],

  items: [
    {
      id: 'now-menb-response-in-schools',
      title: {
        cy: TODO_CY,
        en: 'Getting ready for the MenB response in schools',
      },
      summary: {
        cy: TODO_CY,
        en: 'Updating the Welsh Immunisation System so nurses can record MenB vaccinations in schools using the same system they already use for flu and HPV.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      services: ['WIS'],
      updated: '2026-07-15',
    },
    {
      id: 'now-digital-consent-testing',
      title: {
        cy: TODO_CY,
        en: 'Testing digital consent with families',
      },
      summary: {
        cy: TODO_CY,
        en: 'Trying a new online consent journey for school vaccinations with real families, including support for appropriate self-consent by young people.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-07-15',
    },
    {
      id: 'now-learning-school-nurse-needs',
      title: {
        cy: TODO_CY,
        en: 'Learning what school nurses need',
      },
      summary: {
        cy: TODO_CY,
        en: 'Working directly with school nurses, testing early designs, and iterating before significant build work starts.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-07-15',
    },
    {
      id: 'now-building-next-two-updates',
      title: {
        cy: TODO_CY,
        en: 'Building the next two updates',
      },
      summary: {
        cy: TODO_CY,
        en: 'Finalising and building the next two system releases based on user requests.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-07-15',
    },
    {
      id: 'now-getting-ready-for-winter',
      title: {
        cy: TODO_CY,
        en: 'Getting ready for winter',
      },
      summary: {
        cy: TODO_CY,
        en: 'Agreeing required system changes for flu, COVID and RSV programmes with Public Health Wales and all seven health boards.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-07-15',
    },
    {
      id: 'now-migrating-database-stack',
      title: {
        cy: TODO_CY,
        en: 'Migrating the database stack',
      },
      summary: {
        cy: TODO_CY,
        en: 'Moving the vaccination records platform to a new database stack, completing code changes and entering regression testing before live migration.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-07-15',
    },
    {
      id: 'now-replacing-older-servers',
      title: {
        cy: TODO_CY,
        en: 'Replacing older servers',
      },
      summary: {
        cy: TODO_CY,
        en: 'Replacing unsupported servers to keep the service stable and secure without disrupting users.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'now',
      status: 'in-progress',
      updated: '2026-07-15',
    },
    {
      id: 'next-menb-goes-live',
      title: {
        cy: TODO_CY,
        en: 'MenB goes live',
      },
      summary: {
        cy: TODO_CY,
        en: 'School teams begin recording MenB vaccinations in live sessions, with direct support to resolve early issues quickly.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      services: ['WIS'],
      updated: '2026-07-15',
    },
    {
      id: 'next-small-number-of-schools-live',
      title: {
        cy: TODO_CY,
        en: 'A small number of schools try the new system',
      },
      summary: {
        cy: TODO_CY,
        en: 'Moving from prototype testing to live use in a small number of schools and iterating based on weekly learning.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'next-second-update-and-training',
      title: {
        cy: TODO_CY,
        en: 'The second update goes out with training',
      },
      summary: {
        cy: TODO_CY,
        en: 'Providing nurse training ahead of winter so teams are confident with system changes before peak delivery.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'next-first-real-training-pilot-site',
      title: {
        cy: TODO_CY,
        en: 'First real training at a pilot site',
      },
      summary: {
        cy: TODO_CY,
        en: 'Running initial end-to-end training for school nurses and using the findings to shape wider rollout.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'next-more-families-try-digital-consent',
      title: {
        cy: TODO_CY,
        en: 'More families try digital consent',
      },
      summary: {
        cy: TODO_CY,
        en: 'Extending digital consent trials to more families and schools to build stronger evidence of what works.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'next-refreshing-the-storage',
      title: {
        cy: TODO_CY,
        en: 'Refreshing the storage',
      },
      summary: {
        cy: TODO_CY,
        en: 'Refreshing service storage components behind the scenes to maintain performance and resilience.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'next-planning-following-release',
      title: {
        cy: TODO_CY,
        en: 'Planning the following release',
      },
      summary: {
        cy: TODO_CY,
        en: 'Creating space to plan the next release properly so priority changes are not rushed.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'next',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'later-winter-vaccinations-across-wales',
      title: {
        cy: TODO_CY,
        en: 'Winter vaccinations across Wales',
      },
      summary: {
        cy: TODO_CY,
        en: 'Supporting flu, COVID and RSV vaccination delivery across all seven health boards during the busiest period of the year.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'later-school-vaccinations-main-system',
      title: {
        cy: TODO_CY,
        en: 'School vaccinations become part of the main system',
      },
      summary: {
        cy: TODO_CY,
        en: 'Bringing school vaccinations into the same platform as adult and childhood programmes with one person record and one way of working.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      services: ['WIS'],
      updated: '2026-07-15',
    },
    {
      id: 'later-cypris-continues-to-join-up',
      title: {
        cy: TODO_CY,
        en: "Children's health system continues to join up",
      },
      summary: {
        cy: TODO_CY,
        en: "Continuing to connect CYPrIS with the Welsh Immunisation System so each child in Wales has one clear digital vaccination and health record.",
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      services: ['CYPrIS', 'WIS'],
      updated: '2026-07-15',
    },
    {
      id: 'later-wider-training-school-nurses',
      title: {
        cy: TODO_CY,
        en: 'Wider training for school nurses',
      },
      summary: {
        cy: TODO_CY,
        en: 'Expanding school nurse training across Wales using the pilot learning model.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'later-pre-school-vaccinations',
      title: {
        cy: TODO_CY,
        en: 'Pre-school vaccinations',
      },
      summary: {
        cy: TODO_CY,
        en: 'Working with clinical and policy colleagues to agree how pre-school vaccination delivery should be represented in the service.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'later-connecting-nhs-wales-app',
      title: {
        cy: TODO_CY,
        en: 'Connecting with the NHS Wales App',
      },
      summary: {
        cy: TODO_CY,
        en: 'Starting work on how citizens can view their vaccination records and history through the NHS Wales App.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'later-preparing-full-cloud-move',
      title: {
        cy: TODO_CY,
        en: 'Getting ready for the full move to the cloud',
      },
      summary: {
        cy: TODO_CY,
        en: 'Preparing the target environment and service foundations for full migration to cloud hosting.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-07-15',
    },
    {
      id: 'later-digital-consent-keeps-growing',
      title: {
        cy: TODO_CY,
        en: 'Digital consent keeps growing',
      },
      summary: {
        cy: TODO_CY,
        en: 'Continuing to test and improve digital consent until evidence supports moving to the next stage.',
      },
      categoryId: 'vaccination-digital-service',
      horizon: 'later',
      status: 'exploring',
      updated: '2026-07-15',
    },
  ],
};
