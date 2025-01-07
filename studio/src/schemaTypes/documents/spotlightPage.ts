import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'spotLightPage',
  title: 'Spotlight Page',
  type: 'document',
  fields: [
    defineField({
      name: 'spotlightArray',
      title: 'SPOTLIGHT',
      type: 'array',
      of: [{ type: 'spotlightContainer' }],
    }),
  ],
});
