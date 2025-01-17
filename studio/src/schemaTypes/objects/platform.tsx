import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'platform',
  title: 'Platform',
  type: 'object',
  fieldsets: [
    {
      name: 'platform',
      title: 'Platform Details',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fieldset: 'platform',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('A platform logo is required.'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'platform',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .error('Title must be between 2 and 50 characters.'),
    }),
    defineField({
      name: 'platformLink',
      title: 'Platform Link',
      type: 'url',
      description:
        'This field is exclusively for the platform’s root link, not for any specific content.',
      fieldset: 'platform',
      validation: (Rule) =>
        Rule.uri({ allowRelative: false }).error('Must be a valid URL.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
      link: 'platformLink',
    },
    prepare({ title, media, link }) {
      return {
        title: title || 'Untitled Platform',
        subtitle: link || 'No URL Provided',
        media: media,
      };
    },
  },
});
