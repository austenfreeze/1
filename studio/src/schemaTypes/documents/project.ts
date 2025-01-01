import {defineType, defineField} from 'sanity';

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'projectname',
            title: 'Project Name',
            type: 'string',
            fieldset: 'projectInfo',
        }),
        defineField({
            name: 'projectdescription',
            title: 'Project Description',
            type: 'text',
            fieldset: 'projectInfo',
        }),
        defineField({
            name: 'devDate',
            title: 'Development Began On:',
            type: 'date',
            fieldset: 'projectInfo'
        }),
        defineField({
            name: 'sanityConfigDocument',
            title:'Sanity Configuration',
            type: 'sanityConfigObject',
            fieldset: 'integrations',
        }),
    
    defineField({
        name: 'vercolConfigDocument',
        title: 'Vercel Congiguration',
        type: 'vercelConfigObject',
        fieldset: 'integrations',
    }),
    ],
    fieldsets: [
        {name: 'projectInfo', title: 'Project Information'},
        {name: 'integrations', title: 'integrations',},
    ]
})