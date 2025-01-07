// /schemas/objects/spotlightContainer.ts

import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'spotlightContainer',
  title: 'Spotlight Container',
  type: 'object',
  fields: [
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'array',
      of: [{ type: 'spotlightPreviewObject' }] // Corrected closing parenthesis
    }),
  ],
});
