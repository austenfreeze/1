import {defineType, defineField } from 'sanity';

export default defineType({
    name: 'spotlightPreviewObject',
    title: 'Spotlight Preview Object',
    type: 'object',
    fields: [
        defineField({
        name: 'displayPhoto',
        title: 'Display Photo',
        type: 'image',
        }),
        defineField({
            name: 'displayTitle',
            title: 'Display Title',
            type: 'string',
        }),
        defineField({
            name: 'seotitle',
            title: 'seotitle',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'subtitle',
            type: 'string',
        }),
        defineField({
            name: 'teaser',
            title: 'teaser',
            type: 'text',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'seotitle',
            },
        }),
        defineField({
            name: 'article',
            title: 'Article',
            type: 'reference',
            to: [{type: 'spotlightArticle',}],
        }),
        defineField({
            name: 'date',
            title: 'date',
            type: 'datetime',
        }),
    ],
})