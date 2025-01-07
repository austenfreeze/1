// /schemas/objects/blockContent.ts

import { defineType, defineField } from 'sanity';
import { GiStoneTablet } from 'react-icons/gi';

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'object',
  icon: GiStoneTablet,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
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
    },
    defineField({
      name: 'update',
      title: 'Updates',
      type: 'array',
      of: [{type: 'text'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon', // Optional: Use the icon if you want it in the preview
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled',
        subtitle: subtitle || 'No description',
        media: media || GiStoneTablet, // Default to the icon if no media is specified
      };
    },
  },
});
