// /schemas/objects/blockContent.ts

export default {
  name: 'blockContent',
  title: 'Block Content',
  type: 'object',
  fields: [
    {
      name: 'richtext',
      title: 'Rich Text',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              // External Link Annotation
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description: 'The full URL for the external link.'
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    description: 'If checked, the link will open in a new tab.',
                    type: 'boolean',
                  }
                ]
              },
              // Internal Link Annotation
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [
                      { type: 'headline' },  // Reference to the 'headline' document type
                    ],
                    description: 'Select a document to link to within the site.',
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
};
