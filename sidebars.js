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
        {
          type: 'category',
          label: 'Getting Started',
          collapsed: true,
          items: [
            'instructors/quick-start',
            'instructors/local-installation',
            'instructors/local-development',
          ]
        },
        {
          type: 'category',
          label: 'Reference',
          collapsed: true,
          items: [
            'instructors/related-work',
            'instructors/pedagogical-pattern',
            'instructors/entity-types',
            'instructors/link-errors',
            'instructors/equation-support',
            'instructors/overview-files',
            'instructors/navbar-configuration',
            'instructors/private-files',
            'instructors/linking-in-morea',
            'instructors/formatting-code',
            'instructors/schedule-page',
            'instructors/include-files',
            'instructors/google-analytics',
            'instructors/themes',
            'instructors/advanced-customization',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: true,
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