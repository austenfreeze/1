import { defineType, defineField } from 'sanity';
import { GiStoneTablet } from 'react-icons/gi';

export default defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'object',
  icon: GiStoneTablet,
  fields: [
    {
      name: 'cover',
      title: 'Cover Photo',
      type: 'image',
      options: {hotspot: true, },
      group: 'coverPage',
      fieldset: 'info',
      validation: Rule => Rule.required().error('Required.'),
    },
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      group: 'coverPage',
      fieldset: 'info',
      validation: Rule => Rule.required().error('Required.'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'coverPage',
      fieldset: 'info',
      validation: Rule => Rule.required().error('Required.'),
    },
    {
      name: 'date',
      title: 'date',
      type: 'datetime',
      fieldset: 'info',
      group: 'coverPage',
      validation: Rule => Rule.required().error('Required.'),
    },
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'array',
      of: [{type:'reference',
        to: [{type: 'notes',}],
      }],
      group: 'coverPage',
    }),

    {
      name: 'draft1',
      title: 'Draft #1',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description: 'The full URL for the external link.',
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    description: 'If checked, the link will open in a new tab.',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'headline' }],
                    description: 'Select a document to link to within the site.',
                  },
                ],
              },
            ],
          },
        },
        { type: 'image' }, // Allows inserting standalone images
        { type: 'imageGallery' }, // NEW: Supports embedded image galleries
        { type: 'galleryReference', title: 'Gallery Reference', }, // NEW: Supports embedded image galleries
      ],
      group: 'draft1',
    },




    
    {
      name: 'draft2',
      title: 'Draft #2',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description: 'The full URL for the external link.',
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    description: 'If checked, the link will open in a new tab.',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'headline' }],
                    description: 'Select a document to link to within the site.',
                  },
                ],
              },
            ],
          },
        },
        { type: 'image' }, // Allows inserting standalone images
        { type: 'imageGallery' }, // NEW: Supports embedded image galleries
        { type: 'galleryReference', title: 'Gallery Reference', }, // NEW: Supports embedded image galleries
      ],
      group: 'draft2',
    },




    {
      name: 'draft3',
      title: 'Draft #3',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description: 'The full URL for the external link.',
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    description: 'If checked, the link will open in a new tab.',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'headline' }],
                    description: 'Select a document to link to within the site.',
                  },
                ],
              },
            ],
          },
        },
        { type: 'image' },
        { type: 'notes', },
        { type: 'galleryReference', title: 'Gallery Reference', }, 
      ],
      group: 'draft3',
    },


    defineField({
      name: 'final',
      title: 'Final Version',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    description: 'The full URL for the external link.',
                  },
                  {
                    name: 'blank',
                    title: 'Open in new tab',
                    description: 'If checked, the link will open in a new tab.',
                    type: 'boolean',
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal link',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    title: 'Reference',
                    to: [{ type: 'headline' }],
                    description: 'Select a document to link to within the site.',
                  },
                ],
              },
            ],
          },
        },
        { type: 'image' }, // Allows inserting standalone images
        { type: 'imageGallery' }, // NEW: Supports embedded image galleries
        { type: 'galleryReference', title: 'Gallery Reference', }, // NEW: Supports embedded image galleries
      ],
      group: 'finalVersion',
      validation: Rule => Rule.required().error('Required.'),
    }),
  ],
  groups: [{name: 'coverPage', title: 'Cover Page', default: true,},
          { name: 'draft1', title: 'Draft #1'},
          {name: 'draft2', title: 'Draft #2',},
          {name: 'draft3', title: 'Draft #3',},
          {name: 'finalVersion', title: 'Final Version', },
  ],
  fieldsets: [
    {name: 'info', title: 'Root Information'}
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled',
        subtitle: subtitle || 'No description',
        media: media || GiStoneTablet,
      };
    },
  },

});
