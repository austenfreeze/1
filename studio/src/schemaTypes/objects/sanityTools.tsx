import { defineType, defineField } from 'sanity';
import {PlugIcon} from '@sanity/icons'
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
})