import { defineType, defineField } from 'sanity';
import { LinkIcon } from '@sanity/icons';

export default defineType({
  name: 'corsObject',
  title: 'CORS Origin',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'corsDescription',
      title: 'CORS Description',
      type: 'text',
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      description: 'Is this Origin allowed to send authenticated requests with a user\'s token or session?',
      type: 'boolean',
        initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'corsDescription',
      media: 'icon', // If you want to add an icon or media field, you can define it here
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled',
        subtitle: subtitle || 'No description',
        media: media || null, // Set a default value or remove if you don’t need it
      };
    },
  },
});
