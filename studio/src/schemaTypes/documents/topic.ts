import { defineType, defineField } from 'sanity';
import { GiConversation } from "react-icons/gi";


export default defineType({
  name: 'topic',
  title: 'Topic',
  type: 'document',
  icon: GiConversation,
  fields: [
    defineField({
      name: 'title',
      title: 'Topic Title',
      type: 'string',
    validation: Rule => Rule.required().error('Required.'),
}),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().min(66).max(399).error('Required.'),
    }),
    defineField({
      name: 'related',
      title: 'Sources',
      type: 'array',
      of: [{type: 'string'}],
      description: 'this temporary placeholder is intended to links to related content.',
    }),
    defineField({
        name: 'notes',
        title: 'Notes',
        type: 'array',
        of: [{type: 'reference',
            to: [{type: 'notes',}],
        }],
    }),
],
preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon', // Use the icon as media (can be changed to a custom image if needed)
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Note',
        subtitle: subtitle || 'No Subtitle',
        media: media || GiConversation, // Default to the icon (you can replace it with a custom image if desired)
      };
    },
  },
})