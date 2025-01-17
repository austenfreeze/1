import {defineType, defineField } from 'sanity';

export default defineType({
    name: 'commentConversation',
    title: 'Comment Conversation',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
        }),
        defineField({
            name: 'thread',
            title: 'Thread',
            type: 'array',
            of: [{type: 'comment',}],
        }),
    ],
    })