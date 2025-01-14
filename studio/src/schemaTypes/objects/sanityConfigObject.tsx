import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'sanityConfigObject',
  title: 'Sanity Studio',
  type: 'object',
  fields: [
    defineField({
      name: 'sanityID',
      title: 'Sanity Project ID:',
      type: 'string',
    }),
    defineField({
      name: 'studioURL',
      title: 'Sanity Studio URL:',
      type: 'url',
      fieldset: 'links',
    }),
    defineField({
      name: 'cors',
      title: 'Sanity CORS Origin:',
      type: 'array',
      of: [{ type: 'corsObject' }],
      fieldset: 'links',
    }),
    defineField({
      name: 'sanityApiTokens',
      title: 'Sanity API Tokens:',
      type: 'array',
      of: [{ type: 'sanityApiTokens' }],
      fieldset: 'links',
    }),
    defineField({
      name: 'sanityPlugins',
      title: 'Sanity Plugins:',
      type: 'array',
      of: [{ type: 'sanityPlugins' }],
      fieldset: 'plugins',
    }),
    defineField({
      name: 'sanityTools',
      title: 'Sanity Tools:',
      type: 'array',
      of: [{ type: 'sanityTools' }],
      fieldset: 'tools',
    }),
    defineField({
      name: 'sanityUpgrades',
      title: 'Sanity Upgrades',
      type: 'array',
      of: [{ type: 'sanityUpgrade' }],
      fieldset: 'upgrades',
    }),
  ],
  fieldsets: [
    { name: 'links', title: 'Studio Links', },
    { name: 'api', title: 'Studio APIs', },
    { name: 'plugins', title: 'Studio Plugins', },
    { name: 'tools', title: 'Studio Tools',},
    { name: 'upgrades', title: 'Studio Upgrades and Enhancements', },
  ],
});
