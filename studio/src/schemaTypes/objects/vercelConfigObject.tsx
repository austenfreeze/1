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
      of: [{type: 'url'}],
      fieldset: 'vercel',
    }),
    defineField({
      name: 'domain',
      title: 'Vercel Domains:',
      type: 'array',
      of: [{ type: 'url' }],
      fieldset: 'vercel',
    }),
  ],
  fieldsets: [
    {name: 'vercel', title: 'VERCEL',},
  ],
});
