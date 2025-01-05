import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'foia',
    title:'FOIA',
    type: 'document',
    fields: [
        defineField({
            name: 'introduction',
            title: 'Introduction',
            type: 'array',
            of: [{type: 'blockContent'}],
        }),
        defineField({
            name: 'date',
            title: 'date',
            type: 'datetime',
        }),
        defineField({
            name:'dump',
            title: 'dumb',
            type: 'array',
            of: [{type: 'file',}],
        })
    ]
})