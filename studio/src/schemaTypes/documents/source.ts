import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'source',
  title: 'Source Document',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Referenced Content Title',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true, // Corrected hotspot option
      },
    }),
    defineField({
      name: 'contentType',
      title: 'Content Type',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Article', value: 'article' },
              { title: 'Book', value: 'book' },
              { title: 'Interview', value: 'interview' },
              { title: 'Press Conference', value: 'pressConference' },
              { title: 'Social Post', value: 'socialPost' },
              { title: 'Video', value: 'video' },
              { title: 'Tutorial', value: 'tutorial' },
            ],
          },
        },
      ],
    }),

    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
        },
      ],
    }),

    defineField({
      name: 'entity',
      title: 'Entity',
      type: 'reference',
      to: [{ type: 'entity' }],
    }),

    defineField({
      name: 'associations',
      title: 'Associations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'association' }],
        },
      ],
    }),
  ],

  fieldsets: [
    {
      name: 'basicInfo',
      title: 'Basic Information',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'authorSection',
      title: 'Authors & Entities',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'associationSection',
      title: 'Associations',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'previewSection',
      title: 'Preview Information',
      options: { collapsible: true, collapsed: true },
    },
  ],
});
