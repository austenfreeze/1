import { defineType, defineField } from 'sanity';
import { GiEmerald } from "react-icons/gi";

export default defineType({
  name: 'notes',
  title: 'Notes',
  type: 'document',
  icon: GiEmerald,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'text' }],
      validation: Rule => Rule.required().error('Required.'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      validation: Rule => Rule.required().error('Required.'),
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'date', // Display tags in the subtitle
      media: 'icon', // Use the icon as media (can be changed to a custom image if needed)
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled Note',
        subtitle: subtitle || 'No Date',
        media: media || GiEmerald, // Default to the icon (you can replace it with a custom image if desired)
      };
    },
  },
});
