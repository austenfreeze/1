import { defineType, defineField } from 'sanity';
import { hotspotPreview } from '../components/hotspotPreview'; // Custom tooltip preview component
import { FiImage } from 'react-icons/fi'; // Import the FiImage icon

export default defineType({
  name: 'imageCardDoc',
  title: 'Image Card',
  type: 'document',
  icon: FiImage as typeof FiImage, // Use 'typeof FiImage' to reference the type of the icon component
  fields: [
    // Image File and Metadata
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['blurhash', 'lqip', 'palette', 'location', 'exif'],
        storeOriginalFilename: true,
      },
      validation: (Rule) => Rule.required().error('Image file is required'),
      fieldset: 'image',
    }),
    defineField({
      name: 'fileInfo',
      title: 'File',
      type: 'locationInformation',
      fieldset: 'fileInformation',
    }),
    defineField({
      name: 'imageName',
      title: 'Image Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Image name is required'),
      fieldset: 'image',
    }),
    defineField({
      name: 'imageCard',
      title: 'Media Archiving',
      type: 'imageCard',
      fieldset: 'card',
    }),

    // Image Hotspots
    defineField({
      name: 'hotspots',
      title: 'Hotspot Array',
      type: 'array',
      of: [
        defineField({
          name: 'spot',
          title: 'Spot',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().error('Hotspot Title is required'),
            }),

            defineField({
              name: 'x',
              title: 'X Coordinate',
              type: 'number',
              description: 'The X coordinate for the hotspot location (0 to 1)',
              fieldset: 'coordinates',
            }),

            defineField({
              name: 'y',
              title: 'Y Coordinate',
              type: 'number',
              description: 'The Y coordinate for the hotspot location (0 to 1)',
              fieldset: 'coordinates',
            }),

            defineField({
              name: 'details',
              title: 'Details',
              type: 'text',
              description: 'A short description for the hotspot',
            }),
          ],
          fieldsets: [
            { name: 'coordinates', title: 'Hotspot Coordinates', options: { columns: 2 } },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'details', // Display both the x and y coordinates as the subtitle
              media: 'imageFile',
            },
            prepare(selection) {
              const { title, subtitle, media } = selection;
              return {
                title: title || 'Untitled Hotspot',
                subtitle: subtitle || 'No Details',
                media: media || FiImage,
              };
            },
          },
        }),
      ],
      options: {
        imageHotspot: {
          imagePath: 'image',
          descriptionPath: 'details',
          tooltip: hotspotPreview, // Custom tooltip preview component added
        },
      },
      validation: (Rule) => Rule.unique().error('Hotspots must be unique'),
      fieldset: 'hotspots',
    }),
  ],

  fieldsets: [
    { name: 'hotspots', title: 'Image Hotspots', options: { collapsible: true, collapsed: true } },
    { name: 'image', title: 'Image' },
    { name: 'card', title: 'Card Information', options: { collapsible: true, collapsed: true } },
    { name: 'fileInformation', title: 'File Information', options: { collapsible: true, collapsed: true } },
  ],
});
