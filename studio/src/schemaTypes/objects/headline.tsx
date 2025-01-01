// /schemas/objects/headline.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'headline',
  title: 'Headline',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'image',
    }),
    defineField({
      name: 'preview',
      title: 'Preview',
      type: 'text',
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'array',
      of: [{ type: 'blockContent' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'coverPhoto',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      };
    },
  },
});
