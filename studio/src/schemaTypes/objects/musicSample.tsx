import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'musicSample',
  title: 'Music Sample',
  type: 'object',
  fieldsets: [
    {
      name: 'musicDetails',
      title: 'Music Details',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      fieldset: 'musicDetails',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('Cover art is required.'),
    }),
    defineField({
      name: 'name',
      title: 'Track Name',
      type: 'string',
      fieldset: 'musicDetails',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(100)
          .error('Track name must be between 2 and 100 characters.'),
    }),
    defineField({
      name: 'author',
      title: 'Artist',
      type: 'reference',
      to: [{ type: 'author' }],
      fieldset: 'musicDetails',
      validation: (Rule) => Rule.required().error('An artist must be selected.'),
    }),
    defineField({
      name: 'album',
      title: 'Album',
      type: 'reference',
      to: [{ type: 'album' }],
      fieldset: 'musicDetails',
      validation: (Rule) => Rule.required().error('An album must be selected.'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      coverArt: 'coverArt',
      artist: 'author.name', // Fetch artist name from the referenced author
      album: 'album.title', // Fetch album title from the referenced album
      releaseDate: 'album.releaseDate', // Assuming the album has a release date field
    },
    prepare({ title, coverArt, artist, album, releaseDate }) {
      return {
        title: title || 'Untitled Track',
        subtitle: `${artist || 'Unknown Artist'} • ${album || 'Unknown Album'} • ${releaseDate ? new Date(releaseDate).getFullYear() : 'No Year'}`,
        media: coverArt || undefined, // Display cover art if available
      };
    },
  },
});
