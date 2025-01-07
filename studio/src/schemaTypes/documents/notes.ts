import { defineType, defineField } from 'sanity';
import { GiNotebook } from "react-icons/gi";


export default defineType({
  name: 'notes',
  title: 'Notes',
  type: 'document',
  icon: GiNotebook,
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'blockContent' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'tags'
    }),
    defineField({
      name: 'source',
      title: 'Sources',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'source' }],
        },
      ],
    }),
  ],
});
