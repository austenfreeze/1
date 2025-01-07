// /home/sten/Desktop/1/studio/src/schemaTypes/objects/tracker.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'tracker',
  title: 'Event Tracker',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'trackerName',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.max(500),
    }),
    defineField({
        name: 'completiondate',
        title: 'Completion Date',
        type: 'datetime',
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
      type: 'tags', // Use the plugin's tag type
    }),
  ],
});
