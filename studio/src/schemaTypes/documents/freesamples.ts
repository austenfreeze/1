import {defineType, defineField} from 'sanity'

export default defineType({
    name: 'freesamples',
    title: 'FREE SAMPLE:',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'title',
            type: 'string'
        }),
        {
            name: 'date',
            title: 'date',
            type: 'datetime'
        },
        defineField({
            name: 'chop',
            title: 'chop:',
            type: 'file',
        }),
    ]
})