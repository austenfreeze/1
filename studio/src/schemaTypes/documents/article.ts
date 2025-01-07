import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'article', // Properly closed string for 'name'
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'drafting',
      title: 'Drafting',
      type: 'array',
      of: [{type: 'blockContent'}], // Correctly defined the array of 'blockContent' type
    }),
  ],
})
