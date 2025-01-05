import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'displayTitle',
            title: 'Display Title',
            type: 'string',
        }),
        defineField({
            name: 'seotitle',
            title: 'SEO Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'subtitle:',
            type: 'string',
        }),
        {
            name: 'content',
            title: 'content',
            type: 'array',
            of: [{type: 'blockContent'}],
        },
        defineField({
            name: 'date',
            title: 'date',
            type: 'datetime',
        }),
        defineField({
            name: 'camclip',
            title: 'camclip',
            type: 'file',
            description: '',
        })
    ],
});
