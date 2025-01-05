import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'stenqoutes',
  title: 'Sten Qoutes',
  type: 'document',
  fields: [
    defineField({
      name: 'stenqoutes',
      title: 'Sten Qoutes:',
      type: 'array',
      of: [{ type: 'stenqoute' }],
    }),
  ],
});
