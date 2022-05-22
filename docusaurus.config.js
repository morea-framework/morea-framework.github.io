const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Morea Framework',
  tagline: 'Easily generate educational websites organized by Modules, Outcomes, Readings, Experiences, and Assessments.',
  url: 'https://morea-framework.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  deploymentBranch: 'master',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'morea-framework', // Usually your GitHub org/user name.
  projectName: 'morea-framework.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Morea Framework',
      logo: {
        alt: 'Morea Framework',
        src: 'img/morea-logo.png',
      },
      items: [
        {
          to: 'docs/overview/motivation',
          activeBasePath: 'docs',
          label: 'Motivation',
          position: 'right',
        },
        {
          to: 'docs/instructors/overview',
          activeBasePath: 'docs',
          label: 'Instructor Guide',
          position: 'right',
        },
        {
          to: 'docs/developers/overview',
          activeBasePath: 'docs',
          label: 'Developer Guide',
          position: 'right',
        },
        {
          to: 'docs/help',
          activeBasePath: 'docs',
          label: 'Help',
          position: 'right',
        },
        {to: 'blog', label: 'News', position: 'right'},
        {
          href: 'https://morea-framework.github.io/morea',
          label: 'Demo',
          position: 'right',
        },
        {
          href: 'https://github.com/morea-framework',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `The Morea Framework is developed by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
