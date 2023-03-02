// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');


async function createConfig () {
  const katex = (await import('rehype-katex')).default;
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: process.env.PROJECT_NAME || 'Documentation Site',
    tagline: process.env.TAG_LINE || 'Configuration Tagline',
    url: 'https://app-docs.act.org',
    baseUrl: `/pipeline/${process.env.PIPELINE_FOLDER_NAME || 'pipeline_folder_name'}/`,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    themes: ['@docusaurus/theme-mermaid'],
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    markdown: {
      mermaid: true,
    },
    plugins: ['./webpack.plugin', '@actinc/docusaurus-plugin-panzoom'],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '/', // Serve the docs at the site's root
            sidebarPath: require.resolve('./sidebars.js'),
            sidebarCollapsible: true,
            remarkPlugins: [
              math,
            ],
            rehypePlugins: [katex],
          },

          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        /** @type {import('@actinc/docusaurus-plugin-panzoom').PanZoomPluginOptions} */
        zoom: {
          minScale: 1,
          maxScale: 10,
        },
        mermaid: {
          theme: {light: 'neutral', dark: 'dark'},
        },
        navbar: {
          title: process.env.PROJECT_NAME || 'Documentation Site',
          logo: {
            alt: 'ACT Logo',
            src: 'img/logo.png',
            srcDark: 'img/logo-dark.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'about',
              position: 'left',
              label: 'About',
            },
            {
              type: 'doc',
              docId: 'architecture/architecture',
              position: 'left',
              label: 'Architecture',
            },
            {
              type: 'doc',
              docId: 'features/features',
              position: 'left',
              label: 'Features',
            },
            {
              type: 'doc',
              docId: 'developers/developers',
              position: 'left',
              label: 'Developers',
            },
            {
              href: process.env.BITBUCKET_REPO_URL || 'https://agile.act.org/bitbucket',
              label: 'Bitbucket',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Pages',
              items: [
                {
                  label: 'About',
                  to: '/',
                },
                {
                  label: 'Architecture',
                  to: '/architecture',
                },
                {
                  label: 'Developers',
                  to: '/developers',
                },
                {
                  label: 'Features',
                  to: '/features',
                }
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} ACT, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        docs: {
          sidebar: {
            hideable: true,
          },
        }
      }),
      stylesheets: [
        {
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css',
          type: 'text/css',
          integrity:
            'sha384-bYdxxUwYipFNohQlHt0bjN/LCpueqWz13HufFEV1SUatKs1cm4L6fFgCi1jT643X',
          crossorigin: 'anonymous',
        },
      ],
  }
}

module.exports = createConfig;
