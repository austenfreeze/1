import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageCard',
  title: 'Image Card',
  type: 'object',
  fields: [
    // Image Information
    defineField({
      name: 'imageName',
      title: 'Image Name',
      type: 'string',
      fieldset: 'info',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      fieldset: 'info',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'imageName' },
      fieldset: 'info',
    }),

    // Date Tracking
    defineField({
      name: 'dateAdded',
      title: 'Date Added',
      type: 'datetime',
      fieldset: 'date',
    }),
    defineField({
      name: 'eventDate',
      title: 'Date of Event',
      type: 'datetime',
      fieldset: 'date',
    }),

    // Image File and Metadata
    defineField({
      name: 'imageFile',
      title: 'Image File',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette', 'location', 'exif'],
        storeOriginalFilename: true,
      },
      fieldset: 'imageDetails',
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Describe the image for accessibility and SEO',
      fieldset: 'imageDetails',
    }),
    defineField({
      name: 'photographer',
      title: 'Photographer',
      type: 'string',
      description: 'Credit the photographer or source',
      fieldset: 'imageDetails',
    }),

    // Categorization & Tags
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'categorization',
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      fieldset: 'categorization',
      options: {
        list: [
          { title: 'Nature', value: 'nature' },
          { title: 'Architecture', value: 'architecture' },
          { title: 'Portraits', value: 'portraits' },
          { title: 'Abstract', value: 'abstract' },
        ],
      },
    }),
  ],

  fieldsets: [
    { name: 'info', title: 'Image Information', options: { collapsible: true, collapsed: false } },
    { name: 'date', title: 'Date Information', options: { collapsible: true, collapsed: false } },
    { name: 'imageDetails', title: 'Image Details', options: { collapsible: true, collapsed: true } },
    { name: 'categorization', title: 'Categorization & Tags', options: { collapsible: true, collapsed: true } },
  ],
});
