import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryReference',
  title: 'Gallery Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'galleryReference',
      title: 'Gallery Reference',
      type: 'reference',
      to: [{ type: 'imageGalleryDoc' }],
    }),
  ],
  preview: {
    select: {
      title: 'galleryReference.galleryName', // Pull the gallery name
      subtitle: 'galleryReference.description', // Pull the description
      media: 'galleryReference.collectionCover', // Use collection cover image
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Gallery',
        subtitle: subtitle || 'No description',
        media: media || 'default-image.jpg', // Fallback to default image
      };
    },
  },
});
