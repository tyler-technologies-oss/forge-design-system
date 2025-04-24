import type { Config } from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

export default {
  title: 'Tyler Forge™',
  tagline: 'Enabling design decisions and simplifying consistency.',
  url: 'https://forge.tylertech.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'throw',
  favicon: 'img/favicon.ico',
  stylesheets: [
    'https://cdn.forge.tylertech.com/v1/css/tyler-font.css',
    'https://cdn.forge.tylertech.com/v1/css/tyler-icons-standard.css',
    'https://cdn.forge.tylertech.com/v1/css/tyler-icons-extended.css',
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
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/resources/upgrade-guides/forge-2-0', to: '/blog/2022/05/02/upgrade-guide-forge-2' },
          { from: '/resources/package-dependency', to: '/blog/2020/05/06/package-dependencies' },
          { from: '/resources/cdn', to: '/assets/cdn/overview/' },
          { from: '/core', to: '/get-started' },
          { from: '/core-components/illustrations/library', to: '/assets/illustration-library/' },
          { from: '/core-components/iconography/library', to: '/assets/icon-library/' },
        ],
        createRedirects(existingPath) {
          // Creates redirects for all old component pages
          if (existingPath.startsWith('/components/')) {
            const parts = existingPath.split('/').filter(part => !!part.trim());
            if (parts.length !== 3) {
              return undefined;
            }

            const componentName = parts[2];
            const subRoutes = ['guidance', 'development', 'accessibility'].map(oldPath => `/components/${componentName}/${oldPath}`);
            return [`/components/${componentName}`, ...subRoutes];
          }
          return undefined;
        },
      },
    ],
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
      '@docusaurus/preset-classic',
      {
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
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
        },
        gtag: {
          trackingID: 'G-TJZ8RHYFPE',
        },
      },
    ],
  ],

  themeConfig:
    {
      prism: {
        theme: prismThemes.jettwaveLight,
        darkTheme: prismThemes.vsDark,
      },

      docs: {
        sidebar: {
          autoCollapseCategories: true
        },
      },

      imageZoom: {
       // CSS selector to apply the plugin to, defaults to '.markdown img'
       selector: '.markdown img[alt]:not([alt=""])',
       // Optional medium-zoom options
       // see: https://www.npmjs.com/package/medium-zoom#options
       options: {
         margin: 32,
         background: 'rgba(0,0,0,.8)',
         scrollOffset: 0,
       },
     },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true
      },

      announcementBar: {
        id: 'welcome',
        content: '✨ Forge components 3.0 is now available! View the <a href="/blog/2024/06/10/forge-3-generally-available">announcement</a> for more info.',
        isCloseable: true,
        backgroundColor: '#3D5AFE',
        textColor: '#ffffff'
      },

      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Tyler Technologies, Inc.<br/><small>Licensed under CC BY 4.0</small>`,
        logo: { alt: 'Tyler Forge™ Design System Logo', src: 'https://cdn.forge.tylertech.com/v1/images/branding/forge/forge-logo-full-color.svg' },
        links: [
          {
            title: 'Learn',
            items: [
              { label: 'Blog', href: '/blog' },
              { label: 'Component docs', href: 'https://forge.tylerdev.io/' },
            ]
          },
          {
            title: 'Code',
            items: [
              { label: 'Components', href: 'https://github.com/tyler-technologies-oss/forge/' },
              { label: 'Design System', href: 'https://github.com/tyler-technologies-oss/forge-design-system/' },
            ]
          },
          {
            title: 'More',
            items: [
              { label: 'Illustrations', href: '/assets/illustration-library' },
              { label: 'Icons', href: '/assets/icon-library' },
              { label: 'Recipes', href: '/recipes' },
            ]
          },
          {
            title: 'Legal',
            items: [
              { label: 'License', href: 'https://github.com/tyler-technologies-oss/forge-design-system/blob/main/LICENSE.txt' },
            ]
          }
        ]
      },

      navbar: {
        hideOnScroll: true,
        title: 'Tyler Forge™',
        logo: {
          alt: 'Forge logo',
          src: 'https://cdn.forge.tylertech.com/v1/icons/svg/custom/forge_logo.svg'
        },
        items: [
          { label: 'Get started', to: '/get-started' },
          { label: 'Styles', to: '/styles' },
          { label: 'UX writing', to: '/ux-writing' },
          { label: 'Assets', to: '/assets' },
          { label: 'Components', to: '/components' },
          { label: 'Patterns', to: '/patterns' },
          { label: 'Recipes', to: '/recipes'},
          { label: 'Blog', to: '/blog', },
          {
            label: 'Develop',
            items: [
              {
                type: 'html',
                className: 'dropdown-group-header',
                value: '<b>Current</b>',
              },
              {
                href: 'https://forge.tylerdev.io/',
                label: 'Forge 3.x',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://forge.tylerdev.io/version-2',
                label: 'Forge 2.x',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://tyler-technologies.github.io/forge-internal/',
                label: 'Forge internal (2.x & 3.x)',
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
                href: 'https://tyler-technologies.github.io/tyler-components-web/',
                label: 'TCW 1.x',
                target: '_blank',
                rel: null,
              },
            ]
          },
          { type: 'search', position: 'right' },
        ],
      },
    },
} satisfies Config;
