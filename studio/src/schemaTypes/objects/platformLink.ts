import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'platformLink',
  title: 'Platform Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'array',
      of: [{ type: 'platform' }],
      validation: (Rule) => Rule.required().min(1).error('At least one platform must be selected.'),
    }),
    defineField({
      name: 'linkedContent',
      title: 'Linked Content',
      type: 'reference',
      to: [{ type: 'video' }],
      validation: (Rule) => Rule.required().error('Linked content is required.'),
    }),
    defineField({
      name: 'link',
      title: 'Content Link',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: false }).error('Must be a valid URL.'),
    }),
    defineField({
      name: 'uploaded',
      title: 'Uploaded',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
      validation: (Rule) => Rule.required().error('Upload date is required.'),
    }),
  ],
  preview: {
    select: {
      platformTitle: 'platform.0.title', // Fetch platform's title
      platformLogo: 'platform.0.logo', // Fetch platform's logo
      platformLink: 'platform.0.platformLink', // Fetch platform's main URL
      linkedContent: 'linkedContent.title', // Fetch linked content title
      uploaded: 'uploaded', // Fetch uploaded date
      contentLink: 'link', // Fetch content's direct link
    },
    prepare({ platformTitle, platformLogo, platformLink, linkedContent, uploaded, contentLink }) {
      return {
        title: linkedContent || 'No linked content',
        subtitle: `${platformTitle || 'Unknown Platform'} • ${uploaded ? new Date(uploaded).toLocaleDateString() : 'No Date'}`,
        media: platformLogo || undefined, // Use platform's logo if available
        description: contentLink || platformLink || 'No link provided',
      };
    },
  },
});
