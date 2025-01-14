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
      fieldset: 'info',
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      fieldset: 'info',
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      fieldset: 'info',
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{type: 'reference',
        to: [{type: 'topic',}],
      }],
      fieldset: 'toc',
    }),
    defineField({
      name: 'richTextEditor',
      title: 'Rich Text Editor',
      type: 'array',
      of: [{type: 'blockContent'}], // Correctly defined the array of 'blockContent' type
      fieldset: 'content',
      validation: Rule => Rule.required().error('Required.'),
    }),
  ],
  fieldsets: [{name: 'info', title: 'Information',},
    {name: 'toc', title: 'Table Of Contents',},
    { name: 'content', title: 'Content',},
  ],
})
