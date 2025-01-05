import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'stenqoute',
  title: 'STEN Qoute',
  type: 'object',
  fields: [
    defineField({
      name: 'qoute',
      title: 'Qoute:',
      type: 'string',
    }),
    ],
    })
