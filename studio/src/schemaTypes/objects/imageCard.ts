import { defineType, defineField } from 'sanity';
import React from 'react';
import { Box } from '@sanity/ui';

export default defineType({
  name: 'imageCard',
  title: 'Image Card',
  type: 'object',
  fields: [
    // Image Information
    defineField({
      name: 'description',
      title: 'Description',
      type: 'boolean',
      description: 'Indicates whether the "Description" field is properly filled out in the Media Library.',
      initialValue: false,
      fieldset: 'imageDetails',
    }),

    defineField({
      name: 'hasTitle',
      title: 'Has Title',
      type: 'boolean',
      description: 'Indicates whether the "Title" field is properly filled out in the Media Library.',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      fieldset: 'imageDetails',
    }),

    defineField({
      name: 'hasTags',
      title: 'Has Tags',
      type: 'boolean',
      description: 'Indicates whether the "Tags" field is properly filled out in the Media Library.',
      initialValue: false,
      fieldset: 'imageDetails',
    }),

    defineField({
      name: 'hasAltText',
      title: 'Alt Text',
      type: 'boolean',
      description: 'Indicates whether the "Alt Text" field is properly filled out in the Media Library.',
      initialValue: false,
      validation: (Rule) => Rule.required(),
      fieldset: 'imageDetails',
    }),

    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'JPEG', value: 'JPEG', },
          { title: 'PNG', value: 'PNG', },
          { title: 'WebP Image', value: 'WebP Image', },
        ],
      },
      description: 'Select the type of media this image card will contain.',
      fieldset: 'imageDetails',
    }),
  ],
  fieldsets: [
    { name: 'imageDetails', title: 'Image Details', options: {collapsible: true, collapsed: true,}, },
  ],
});
