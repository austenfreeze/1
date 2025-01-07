import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'association',
  title: 'Association',
  type: 'document',
  fields: [
    defineField({
      name: 'person',
      title: 'Person Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string',
    }),
    defineField({
      name: 'entity',
      title: 'Associated Entity',
      type: 'reference',
      to: [{type: 'entity'}],
    }),
  ],
})
