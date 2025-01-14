import { defineType, defineField } from 'sanity';
import {DoubleChevronUpIcon} from '@sanity/icons'

export default defineType({
  name: 'sanityUpgrade',
  title: 'Sanity Upgrade',
  type: 'object',
  icon: DoubleChevronUpIcon,
  fields: [
    defineField({
      name: 'upgradeName',
      title: 'Sanity Upgrade Name:',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Upgrade Description:',
      type: 'text',
    }),
    defineField({
      name: 'upgradeDoc',
      title: 'Sanity Upgrade Documentation:',
      type: 'url',
    }),
    defineField({
      name: 'installCMD',
      title: 'Sanity Upgrade Install CMD',
      type: 'string',
    }),
    defineField({
      name: 'upgradeImport',
      title: 'Sanity Upgrade Import:',
      type: 'string',
      description: 'root/studio/sanity.config.ts',
    }),
    defineField({
      name: 'upgradeOptions',
      title: 'Upgrade Options',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'upgradeName',
      subtitle: 'description',
      media: 'icon', // No media field defined, you could use a custom icon or image
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled',
        subtitle: subtitle || 'No description',
        media: media || DoubleChevronUpIcon, // Use default icon if no media is set
      };
    },
  },
});
