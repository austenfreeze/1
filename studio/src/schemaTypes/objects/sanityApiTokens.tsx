import { defineType, defineField } from 'sanity';
import { ApiIcon } from '@sanity/icons';

export default defineType({
    name: 'sanityApiTokens',
    title: 'API Token',
    type: 'object',
    icon: ApiIcon, // Corrected: Use the actual imported ApiIcon component here
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'value',
            title: 'Value',  // Capitalized 'value' for consistency in the title
            type: 'string',
            icon: ApiIcon,
        }),
    ],
    preview: {
        select: {
          title: 'name',
          subtitle: 'value',
          media: 'icon', // No media field defined, you could use a custom icon or image
        },
        prepare(selection) {
          const { title, subtitle, media } = selection;
          return {
            title: title || 'Untitled',
            subtitle: subtitle || 'No description',
            media: media || ApiIcon, // Use default icon if no media is set
          };
        },
      },
});
