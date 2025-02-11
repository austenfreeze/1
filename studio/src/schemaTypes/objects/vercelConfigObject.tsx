import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'vercelConfigObject',
  title: 'Vercel Hosting',
  type: 'object',
  fields: [
    defineField({
      name: 'vercelDeployment',
      title: 'Vercel Deployment Links:',
      type: 'array',
      of: [{ type: 'url' }],
    }),
    defineField({
      name: 'domain',
      title: 'Vercel Domains:',
      type: 'array',
      of: [{ type: 'url' }],
    }),
  ],
});
