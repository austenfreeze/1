import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'album',
  title: 'Album',
  type: 'document',
  fieldsets: [
    {
      name: 'albumDetails',
      title: 'Album Details',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'coverArt',
      title: 'Cover Art',
      type: 'reference',
      to: [{type: 'imageCardDoc',}],
      fieldset: 'albumDetails',
      validation: (Rule) => Rule.required().error('Album cover art is required.'),
    }),
    defineField({
      name: 'title',
      title: 'Album Title',
      type: 'string',
      fieldset: 'albumDetails',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(100)
          .error('Album title must be between 2 and 100 characters.'),
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{ type: 'author' }],
      fieldset: 'albumDetails',
      validation: (Rule) => Rule.required().error('An artist must be selected.'),
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      fieldset: 'albumDetails',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required().error('Release date is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      coverArt: 'coverArt',
      artist: 'artist.name', // Fetch artist's name from the reference
      releaseDate: 'releaseDate',
    },
    prepare({ title, coverArt, artist, releaseDate }) {
      return {
        title: title || 'Untitled Album',
        subtitle: `${artist || 'Unknown Artist'} • ${releaseDate ? new Date(releaseDate).getFullYear() : 'No Year'}`,
        media: coverArt || undefined, // Display cover art if available
      };
    },
  },
});
