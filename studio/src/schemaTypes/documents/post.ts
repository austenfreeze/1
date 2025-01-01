import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'title',
            type: 'array',
            of: [{type: 'blockContent'}],
        }),
        defineField({
            name: 'date',
            title: 'date',
            type: 'datetime',
        }),
        defineField({
            name: 'post',
            title: 'Post Content',
            type: 'string', // You can change this to another type if needed (e.g., 'text' or 'blockContent')
        }),
        defineField({
            name: 'camclip',
            title: 'camclip',
            type: 'file',
            description: '',
        })
    ],
});
