import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'spotLightPage',
  title: 'Spotlight Page',
  type: 'document',
  fields: [
    defineField({
      name: 'spotlightContainerArray',
      title: 'Spotlight Container',
      type: 'spotlightContainer',
    }),
  ],
});
