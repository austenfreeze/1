import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'tagSettings',
  title: 'Tag Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'includeFromReference',
      title: 'Include from Reference',
      type: 'string',  // This could be an array if you need multiple references
      description: 'Document or field from which tags should be included.',
    }),
    defineField({
      name: 'allowCreate',
      title: 'Allow Tag Creation',
      type: 'boolean',
    }),
    defineField({
      name: 'onCreate',
      title: 'On Create Handler',
      type: 'object',
      fields: [
        defineField({
          name: 'inputValue',
          title: 'Input Value',
          type: 'string',
          description: 'Handle new tag input.',
        }),
        defineField({
          name: 'currentValues',
          title: 'Current Values',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Handle current selected tags.',
        }),
      ],
    }),
  ],
});
