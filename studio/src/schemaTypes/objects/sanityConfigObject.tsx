import { defineType, defineField } from 'sanity';


export default defineType({
  name: 'sanityConfigObject',
  title: 'Sanity Studio',
  type: 'object',
  fields: [
    defineField({
      name: 'sanityID',
      title: 'Sanity ID:',
      type: 'string',
      fieldset: 'sanity',
    }),
    defineField({
      name: 'studioURL',
      title: 'Sanity Studio URL:',
      type: 'url',
      fieldset: 'sanity',
    }),
    defineField({
      name: 'cors',
      title: 'Sanity CORS Origin:',
      type: 'array',
      of:   [{ type: 'corsObject' }],
      fieldset: 'sanity',
    }),
    defineField({
        name: 'sanityApiTokens',
        title: 'Sanity API Tokens:',
        type: 'array',
        of:   [{ type: 'sanityApiTokens' }],
        fieldset: 'sanity',
    }),
    defineField({
        name: 'sanityPlugins',
        title: 'Sanity Plugins:',
        type: 'array',
        of: [{type: 'sanityPlugins',}],
        fieldset: 'sanity',
    }),
    defineField({
        name: 'sanityTools',
        title: 'Sanity Tools:',
        type: 'array',
        of: [{type: 'sanityTools'}],
    }),
    defineField({
        name: 'sanityUpgrades',
        title: 'Sanity Upgrades',
        type: 'array',
        of: [{type: 'sanityUpgrade',}],
    }),
  ],
  fieldsets: [
    { name: 'sanity', title: 'SANITY' },
  ],
});
