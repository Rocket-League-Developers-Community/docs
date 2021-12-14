/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RLJDC',
  tagline: 'Rocket League Japan Developers Community',
  url: 'https://rljp.dev',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RocketLeagueJapanDevelopersCommunity', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RLJDC',
      logo: {
        alt: 'Logo',
        src: 'https://cdn.discordapp.com/icons/820640307112050720/ea265e5c33fc608343b672ae649a9a66.webp?size=640',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/RocketLeagueJapanDevelopersCommunity',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/RocketLeagueJapanDevelopersCommunity',
            },
          ],
        },
      ],
      logo: {
        alt: 'RLJDC Logo',
        src: 'https://cdn.discordapp.com/icons/820640307112050720/ea265e5c33fc608343b672ae649a9a66.webp?size=640',
        width: 160,
        height: 51,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Rocket League Japan Developers Community.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
