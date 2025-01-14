import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'imageGalleryDoc',
  title: 'Image Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'collectionCover',
      title: 'Collection Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'galleryName',
      title: 'Gallery Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'dateCreated',
      title: 'Date Created',
      type: 'datetime',
    }),
    defineField({
      name: 'archived',
      title: 'Archived',
      type: 'boolean',
      description: 'Has this collection been archived?',
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'imageGallery', // This references the object schema
    }),
  ],
  preview: {
    select: {
      title: 'galleryName',
      subtitle: 'description',
      media: 'collectionCover', // Default to collection cover if available
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Gallery',
        subtitle: subtitle || 'No description',
        media: media || 'default-image.jpg', // Fallback image if no cover image exists
      };
    },
  },
});
