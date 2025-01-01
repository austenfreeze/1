// /schemas/documents/headline.ts

import { defineType, defineField } from 'sanity';
import blockContent from '../objects/blockContent';
import headline from '../objects/headline';  // Ensure correct import

export default defineType({
  name: 'headlines',  // This is the name of your document type
  title: 'Headlines',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'blockContent' }],  // Reference to blockContent schema for rich text
    }),
    defineField({
      name: 'headline',  // Reference to headline object
      title: 'Headline',
      type: 'headline',  // Use the headline object schema
    }),
  ],
});
