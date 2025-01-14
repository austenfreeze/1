import { defineType, defineField } from 'sanity';
import {WrenchIcon} from '@sanity/icons'

export default defineType({
  name: 'sanityTools',
  title: 'Sanity Tools',
  type: 'object',
  icon: WrenchIcon,
  fields: [
    defineField({
      name: 'toolName',
      title: 'Sanity Tool Name:',
      type: 'string',
    }),
    defineField({
        name: 'toolDescription',
        title: 'Tool Description',
        type: 'text',
    }),
    defineField({
        name: 'toolDoc',
        title: 'Sanity tool Documentation:',
        type: 'url',
    }),
    defineField({
        name: 'installCMD',
        title: 'Sanity Plugin Tool CMD',
        type: 'string',
    }),
    defineField({
        name: 'toolImport',
        title: 'Sanity Tool Import:',
        type: 'string',
        description: 'root/studio/sanity.config.ts',
    }),
    defineField({
        name: 'toolOptions',
        title: 'Plugin Options',
        type: 'text',
    }),
    ],
    preview: {
        select: {
          title: 'toolName',
          subtitle: 'toolDescription',
          media: 'icon', // No media field defined, you could use a custom icon or image
        },
        prepare(selection) {
          const { title, subtitle, media } = selection;
          return {
            title: title || 'Untitled',
            subtitle: subtitle || 'No description',
            media: media || WrenchIcon, // Use default icon if no media is set
          };
        },
      },
})