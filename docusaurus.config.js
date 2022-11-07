// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Forge',
  tagline: 'Enabling design decisions and simplifying consistency.',
  url: 'https://forge.tylertech.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://cdn.forge.tylertech.com/v1/css/tyler-font.css',
    'https://cdn.forge.tylertech.com/v1/css/tyler-icons-standard.css'
  ],

  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tyler-technologies-oss', // Usually your GitHub org/user name.
  projectName: 'forge-design-system', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-sass',
  ],
  
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      ({
        hashed: true,
        indexPages: true,
        docsRouteBasePath: '/',
        explicitSearchResultPath: true
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://pr.new/github.com/tyler-technologies-oss/forge-design-system/edit/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://pr.new/github.com/tyler-technologies-oss/forge-design-system/edit/main/',
          blogTitle: 'Tyler Forge design system blog',
          blogDescription: 'Blog posts for designers and developers relating to the Tyler Forge design system',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true
        },
      },

      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true
      },

      navbar: {
        hideOnScroll: true,
        title: 'Forge',
        logo: {
          alt: 'Forge logo',
          src: 'https://cdn.forge.tylertech.com/v1/icons/svg/custom/forge_logo.svg'
        },
        items: [
          { label: 'Getting started', to: '/getting-started' },
          { label: 'Styles', to: '/styles' },
          { label: 'Resources', to: '/resources' },
          { label: 'Components', to: '/components' },
          { label: 'Layouts', to: '/layouts' },
          { label: 'Patterns', to: '/patterns' },
          { to: '/blog', label: 'Blog' },
          {
            label: 'Develop',
            // position: 'right',
            items: [
              {
                type: 'html',
                className: 'dropdown-group-header',
                value: '<b>Current</b>',
              },
              {
                href: 'https://forge.tylerdev.io/',
                label: 'Forge 2.x',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://animated-doodle-7c7696e9.pages.github.io/main/',
                label: 'Forge 2.x (internal)',
                target: '_blank',
                rel: null,
              },
              {
                type: 'html',
                value: '<hr class="dropdown-separator">',
              },
              {
                type: 'html',
                className: 'dropdown-group-header',
                value: '<b>Legacy</b>',
              },
              {
                href: 'https://vigilant-potato-ad3164a4.pages.github.io/',
                label: 'TCW 1.x',
                target: '_blank',
                rel: null,
              },
            ]
          },
          { type: 'search', position: 'right' },
          {
            href: 'https://github.com/tyler-technologies-oss/forge-design-system/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
