import {defineType, defineField } from 'sanity';

export default defineType({
    name: 'comment',
    title: 'comment',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'author',
        }),
        defineField({
            name: 'comment',
            title: 'comment',
            type: 'string',
        }),
        defineField({
            name: 'media',
            title: 'media',
            type: 'image',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
        }),
        defineField({
            name: 'platform',
            title: 'Platform',
            type: 'reference',
            to: [{type: 'platform',}],
        }),
    ],
})