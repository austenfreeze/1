// /schemas/objects/zing.ts

import { defineType, defineField } from 'sanity';
import { GiPowerLightning } from 'react-icons/gi';

export default defineType({
  name: 'zing',
  title: 'ZING',
  type: 'object',
  icon: GiPowerLightning, // Correctly set the icon here as a React component
  fields: [
    defineField({
      name: 'title',
      title: 'Title', // Capitalized "Title" for consistency
      type: 'string',
    }),
    defineField({
      name: 'content', // Renamed from 'zing' to 'content' for clarity
      title: 'ZING Content',
      type: 'array',
      of: [{ type: 'blockContent' }], // Using your 'blockContent' schema for rich text
      description: 'The main content for the ZING element on the lander page.',
    }),
  ],
});
