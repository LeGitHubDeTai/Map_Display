import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Map Display',
  tagline: 'Map Display allows displaying map tiles on a website.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://map_display.taistudio.fr/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TaiStudio', // Usually your GitHub org/user name.
  projectName: 'Map_Display', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LeGitHubDeTai/Map_Display/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LeGitHubDeTai/Map_Display/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Map Display',
      logo: {
        alt: 'Map Display Logo',
        src: 'img/mapdisplay.png',
      },
      items: [
        { to: '/docs/intro', label: 'Docs', position: 'left' },
        // {to: '/blog', label: 'Blog', position: 'left'},
        { to: '/map', label: 'Demo', position: 'left' },
        {
          href: 'https://github.com/LeGitHubDeTai/Map_Display',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Map',
              to: '/map',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LeGitHubDeTai/Map_Display',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tai Studio - Map_Display, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
