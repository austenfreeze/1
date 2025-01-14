import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'githubConfigObject',
  title: 'Github Documentation',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Name:',
      type: 'string',
      fieldset: 'github',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      fieldset: 'github',
    }),
    defineField({
      name: 'repositories',
      title: 'Repository Links:',
      type: 'array',
      of: [{ type: 'url' }],
      description: 'GitHub configuration is synched through Vercel, which acts as the Root (alongside Sanity.)',
      fieldset: 'github',
    }),
  ],
  fieldsets: [
    { name: 'github', title: 'GITHUB',},
  ],
});
