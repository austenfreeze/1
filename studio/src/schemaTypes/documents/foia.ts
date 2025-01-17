import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'foia',
  title: 'FOIA',
  type: 'document',
  fields: [
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true, // Enables better cropping
      },
    }),
    defineField({
      name: 'title',
      title: 'Release Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96, // Prevent overly long slugs
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Release Date',
      type: 'datetime',
    }),
    defineField({
      name: 'foiaFiles',
      title: 'FOIA Releases',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            accept: 'application/pdf', // Restrict to PDFs
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'cover',
    },
    prepare({ title, subtitle, media }) { // Ensure media is included
      return {
        title: title || 'No Title',
        subtitle: subtitle || 'No Description',
        media: media || undefined, // Sanity automatically handles missing media
      };
    },
  },
});
