/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['overview/motivation'],
    },
    {
      type: 'category',
      label: 'Instructor Guide',
      collapsed: false,
      items: [
          'instructors/overview',
          'instructors/quick-start',
          'instructors/local-installation',
          'instructors/local-development',
          'instructors/pedagogical-pattern',
          'instructors/related-work',
          'instructors/entity-types',
          'instructors/equation-support',
          'instructors/overview-files',
          'instructors/navbar-configuration',
          'instructors/private-files',
          'instructors/linking-in-morea',
          'instructors/formatting-code',
          'instructors/schedule-page',
          'instructors/include-files',
          'instructors/slides',
          'instructors/google-analytics',
          'instructors/themes',
          'instructors/advanced-customization',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: [
          'developers/overview',
          'developers/morea-generator',
          'developers/morea-index-markdown',
          'developers/manage-this-site',
          'developers/markdown-features'
      ],
    },
  ],

};