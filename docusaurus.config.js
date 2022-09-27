// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const mermaid = require('mdx-mermaid');
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

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ACT', // Usually your GitHub org/user name.
    projectName: process.env.BITBUCKET_REPO_NAME || 'repo-name', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en'],
    },
    plugins: ['./webpack.plugin'],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [
              math,
              [
                mermaid,
                {
                  theme: { light: 'neutral', dark: 'forest' },
                },
              ],
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
        navbar: {
          title: process.env.PROJECT_NAME || 'Documentation Site',
          logo: {
            alt: 'ACT Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'about',
              position: 'left',
              label: 'About',
            },
            {
              href: 'https://agile.act.org/bitbucket',
              label: 'Bitbucket',
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
                  label: 'About',
                  to: '/docs/about',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} ACT, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
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
