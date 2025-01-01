import { defineType, defineField } from 'sanity';
import {TiersIcon} from '@sanity/icons'

export default defineType({
  name: 'sanityUpgrade',
  title: 'Sanity Upgrade',
  type: 'object',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'upgradeName',
      title: 'Sanity Upgrade Name:',
      type: 'string',
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
        title: 'upgrade Options',
        type: 'text',
    }),
    ],
})