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
      link: {type: 'generated-index'},
      items: [
        'instructors/overview',
        {
          type: 'category',
          label: 'Getting Started',
          collapsed: true,
          link: {type: 'generated-index'},
          items: [
            'instructors/quick-start',
            {
              type: 'category',
              label: 'Cloud development',
              collapsed: true,
              link: {type: 'generated-index'},
              items: [
                'instructors/cloud-installation',
                'instructors/cloud-development',
              ]
            },
            {
              type: 'category',
              label: 'Local development',
              collapsed: true,
              link: {type: 'generated-index'},
              items: [
                'instructors/local-installation',
                'instructors/local-development',
              ]
            },
            'instructors/module-design',
            'instructors/module-implementation',

          ]
        },
        {
          type: 'category',
          label: 'Reference',
          collapsed: true,
          link: {type: 'generated-index'},
          items: [
            'instructors/pedagogical-pattern',
            'instructors/entity-types',
            'instructors/link-errors',
            'instructors/config-yml',
            'instructors/equation-support',
            'instructors/overview-files',
            'instructors/navbar-configuration',
            'instructors/private-files',
            'instructors/linking-in-morea',
            'instructors/formatting-code',
            'instructors/schedule-page',
            'instructors/include-files',
            'instructors/embed-video',
            'instructors/icons',
            'instructors/tables',
            'instructors/admonitions',
            'instructors/dependabot-alerts',
            'instructors/google-analytics',
            'instructors/themes',
            'instructors/advanced-customization',
            'instructors/updating',
            'instructors/related-work',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Change-HI',
      collapsed: false,
      link: {type: 'generated-index'},
      items: [
        'change-hi/overview',
        'change-hi/getting-started',
        'change-hi/workshop-design',
        'change-hi/tips',
        'change-hi/admin-editing',
        'change-hi/workshop-design-checklist',
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: true,
      link: {type: 'generated-index'},
      items: [
          'developers/overview',
          'developers/morea-generator',
          'developers/theme-customization',
          'developers/morea-index-markdown',
          'developers/manage-this-site',
          'developers/markdown-features'
      ],
    },
    {
      type: 'category',
      label: 'Evaluation',
      link: {type: 'generated-index'},
      collapsed: true,
      items: [
        'evaluation/case-study-may-2015',
        'evaluation/case-study-nov-2015',
      ],
    },
  ],

};
