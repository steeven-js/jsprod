import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

// ----------------------------------------------------------------------

const imagePath = (name) => `${CONFIG.assetsDir}/assets/images/menu/${name}`;

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    subheader: 'Ce que je propose',
    coverUrl: imagePath('marketing.webp'),
    items: [
      { title: 'Mes service', path: paths.services.root },
    ],
  },
  {
    subheader: 'Mes Réalisations',
    coverUrl: imagePath('marketing.webp'),
    items: [
      { title: 'Projets', path: paths.projets.root },
    ],
  },
  {
    subheader: 'Mes Articles',
    coverUrl: imagePath('marketing.webp'),
    items: [
      { title: 'Posts', path: paths.posts.root },
    ],
  },
];

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Accueil', path: '/' },
  { title: 'Mes Services', path: paths.services.root },
  { title: 'A propos', path: paths.about.root },
  { title: 'Mes Projets', path: paths.projets.root },
  { title: 'Mes Posts', path: paths.posts.root },
];

// ----------------------------------------------------------------------

export const demoNavData = [
  { title: 'Home', path: '/' },
  { title: 'Components', path: '#' },
  {
    title: 'Pages',
    path: paths.pages,
    children: [
      { title: 'Page 1', path: '#' },
      { title: 'Page 2', path: '#' },
      { title: 'Page 3', path: '#' },
    ],
  },
  {
    title: 'Items',
    path: paths.pages,
    children: [
      { title: 'Item 1', path: '#' },
      { title: 'Item 2', path: '#' },
      { title: 'Item 3', path: '#' },
    ],
  },
  { title: 'Docs', path: paths.docs },
];
