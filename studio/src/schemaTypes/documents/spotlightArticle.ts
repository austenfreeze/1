import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'spotlightArticle',
    title: 'Spotlight Article',
    type: 'document',
    fields: [
        defineField({
            name: 'articleCover',
            title: 'Article Cover',
            type: 'image',
            fieldset: 'spotlightArticle',
        }),
        defineField({
            name: 'articleTitle',
            title: 'Article Title:',
            type: 'slug',
            fieldset: 'spotlightArticle',
        }),
        defineField({
            name: 'articlesubtitle',
            title: 'articlesubtitle',
            type: 'string',
            fieldset: 'spotlightArticle',
        }),
        defineField({
            name: 'Content',
            title: 'content',
            type: 'array',
            of: [{type: 'blockContent',}],
            fieldset: 'spotlightArticle',
        }),
        defineField({
            name: 'referencetopic',
            title: 'Reference Topic',
            type: 'spotlightPreviewObject',
            fieldset: 'connections',
        }),
        defineField({
            name: 'slug',
            title: 'Article Slug',
            type: 'slug',
            fieldset: 'connections',
            options: {
                source: 'articleTitle',
            },
        }),
    ],
    fieldsets: [
        {name: 'spotlightArticle', title: 'Spotlight Article:', },
        {name: 'connections', title: 'Connections:'},

    ],
})