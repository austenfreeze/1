import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'videoSample',
  title: 'Video Sample',
  type: 'object',
  fieldsets: [
    {
      name: 'videoDetails',
      title: 'Video Details',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      fieldset: 'videoDetails',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('A thumbnail is required.'),
    }),
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      fieldset: 'videoDetails',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(100)
          .error('Video title must be between 2 and 100 characters.'),
    }),
    defineField({
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: [{ type: 'author' }],
      fieldset: 'videoDetails',
      validation: (Rule) => Rule.required().error('A creator must be selected.'),
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      fieldset: 'videoDetails',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      fieldset: 'videoDetails',
      validation: (Rule) =>
        Rule.max(500).error('Description cannot exceed 500 characters.'),
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      fieldset: 'videoDetails',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required().error('Release date is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      thumbnail: 'thumbnail',
      creator: 'creator.name', // Fetch creator's name from reference
      releaseDate: 'releaseDate',
    },
    prepare({ title, thumbnail, creator, releaseDate }) {
      return {
        title: title || 'Untitled Video',
        subtitle: `${creator || 'Unknown Creator'} • ${releaseDate ? new Date(releaseDate).getFullYear() : 'No Year'}`,
        media: thumbnail || undefined, // Display thumbnail if available
      };
    },
  },
});
