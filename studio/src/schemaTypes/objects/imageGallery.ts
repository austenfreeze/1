import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'reference',
        to: [{type: 'imageCardDoc',}],
      }],
    }),
  ],
})