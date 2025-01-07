import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true, // Corrected hotspot option
      },
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'authorName',
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'affiliations',
      title: 'Affiliations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'entity'}],
        },
      ],
    }),
    defineField({
      name: 'referencedin',
      title: 'Referenced In',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'notes'}],
        },
      ],
    }),
    defineField({
      name: 'authorOf',
      title: 'Author Of',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'source'}],
        },
      ],
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{type: 'url'}],
    }),
  ],
})
