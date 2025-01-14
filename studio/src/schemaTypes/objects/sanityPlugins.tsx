import { defineType, defineField } from 'sanity';
import {PlugIcon} from '@sanity/icons'

export default defineType({
  name: 'sanityPlugins',
  title: 'Sanity Plugins',
  type: 'object',
  icon: PlugIcon,
  fields: [
    defineField({
      name: 'pluginName',
      title: 'Sanity Plugin Name:',
      type: 'string',
    }),
    defineField({
        name: 'pluginDescription',
        title: 'Plugin Description',
        type: 'text',
    }),
    defineField({
        name: 'pluginDoc',
        title: 'Sanity Plugin Documentation:',
        type: 'url',
    }),
    defineField({
        name: 'installCMD',
        title: 'Sanity Plugin Install CMD',
        type: 'string',
    }),
    defineField({
        name: 'pluginImport',
        title: 'Sanity Plugin Import:',
        type: 'string',
        description: 'root/studio/sanity.config.ts',
    }),
    defineField({
        name: 'pluginOptions',
        title: 'Plugin Options',
        type: 'text',
    }),
    ],
    preview: {
        select: {
          title: 'pluginName',
          subtitle: 'pluginDescription',
          media: 'icon', // No media field defined, you could use a custom icon or image
        },
        prepare(selection) {
          const { title, subtitle, media } = selection;
          return {
            title: title || 'Untitled',
            subtitle: subtitle || 'No description',
            media: media || PlugIcon, // Use default icon if no media is set
          };
        },
      },
})