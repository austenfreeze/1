import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'entity',
  title: 'Entity',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image', // Logo should be an image field
      options: {
        hotspot: true, // Optional: adds the ability to crop the image
      },
    }),
  ],
})
