import { defineType, defineField } from 'sanity';
import { GiCheckeredFlag } from "react-icons/gi";


export default defineType({
  name: 'tracker',
  title: 'Tracker',
  type: 'document',
  icon: GiCheckeredFlag,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'notes',
      title: 'notes',
      type: 'array',
      of: [{type: 'reference',
          to: [{type: 'notes',}],
      }],
  }),
  defineField({
    name: 'tags',
    title: 'Tags',
    type: 'tags',
  }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'datetime',
      description: 'Date of occurrence.',
      validation: Rule => Rule.required().error('Tracker Documents can be drafted for the use of secondary tasks, but cannot be published without a proper and true Date of Occurrence as to properly filter all other use cases.'),
    }),
  ],
})
