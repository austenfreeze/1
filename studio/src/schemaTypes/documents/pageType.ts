import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'pageType',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
            name: 'ZING',
            type: 'zing',
          }),
          defineArrayMember({
            name: 'HEADLINES:',
            type: 'headlineArray',
          }),
        ],
    })
  ],
})