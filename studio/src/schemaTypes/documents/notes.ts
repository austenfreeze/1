import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'notes',
    title: 'Notes:',
    type:'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'date',
            type: 'datetime',
        }),
        defineField({
            name: 'content',
            title: 'content',
            type: 'array',
            of: [{type: 'blockContent'}],
        }),
    ],
});
