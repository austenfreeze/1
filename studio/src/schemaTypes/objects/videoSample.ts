import { defineType, defineField } from 'sanity';

const videoSample = defineType({
  name: 'videoSample',
  title: 'Video Sample',
  type: 'object',
  fieldsets: [{ name: 'videoDetails', title: 'Video Details', options: { collapsible: true, collapsed: false } }],
  fields: [
      defineField({
          name: 'thumbnail',
          title: 'Thumbnail',
          type: 'image',
          fieldset: 'videoDetails',
      }),
      defineField({
          name: 'title',
          title: 'Video Title',
          type: 'string',
          fieldset: 'videoDetails',
      }),
      defineField({
          name: 'creator',
          title: 'Creator',
          type: 'reference',
          to: [{ type: 'author' }],
          fieldset: 'videoDetails',
      }),
      defineField({
        name: 'releaseDate',
        title: 'Release Date',
        type: 'datetime',
      }),
      defineField({
          name: 'videoFile',
          title: 'Video File',
          type: 'file',
          fieldset: 'videoDetails',
      }),
      defineField({
          name: 'stills',
          title: 'Stills',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'imageGalleryDoc' }] }],
          fieldset: 'videoDetails',
      }),
      defineField({
          name: 'quotes',
          title: 'Quotes',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'stenqoute' }] }],
          fieldset: 'videoDetails',
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

export default videoSample;