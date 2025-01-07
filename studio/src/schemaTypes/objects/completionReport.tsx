import {defineType, defineField} from 'sanity';

export default defineType({
    name: 'completionReport',
    title: 'Completion',
    type: 'object',
    fields: [
    defineField({
        name: 'beginingstate',
        title: 'Beginning State',
        type: 'array',
        of: [{type: 'file'}],
        fieldset: 'documentation',
    }),
    defineField({
        name: 'progressivestates',
        title: 'Progressive States',
        type: 'array',
        of: [{type: 'file'}],
        fieldset: 'documentation',
    }),

    defineField({
        name: 'notes',
        title: 'notes',
        type: 'array',
        of: [{type: 'reference', 
            to: [{type: 'notes',}],
        }],
    }),
    defineField({
        name: 'date',
        title: 'Date Completed:',
        type: 'datetime',
    }),
],
fieldsets: [
    {name: 'documentation', title: 'Documentation',},
]
})