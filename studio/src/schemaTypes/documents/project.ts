import { defineType, defineField } from 'sanity';

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
            description: 'Root folder as it is known in the root-local directory.',
        }),
        defineField({
            name: 'root',
            title: 'Root Folder Path:',
            type: 'string',
            fieldset: 'projectInfo',
            description: 'Folder path to the project directory at the root-local level.'
        }),
        defineField({
            name: 'subdirectories',
        title: 'Subdirectories:',
        type: 'array',
        of: [{type: 'string',}],
        fieldset: 'projectInfo',
        description: 'folder path to other relevant secondary directories in the root-local project folder.',
}),
        defineField({
            name: 'system',
            title: 'System',
            type: 'string',
            options: {
                list: [
                    { title: 'Linux', value: 'Linux' },
                    { title: 'Windows', value: 'Windows' },
                ],
                layout: 'radio', // Optional: 'dropdown' for dropdown, 'radio' for radio buttons
            },
            fieldset: 'projectInfo',
        }),
        defineField({
            name: 'projectdescription',
            title: 'Project Description',
            type: 'array',
            of: [{ type: 'blockContent' }],
            fieldset: 'projectInfo',
        }),
        defineField({
            name: 'devDate',
            title: 'Development Began On:',
            type: 'date',
            fieldset: 'projectInfo',
        }),
        defineField({
            name: 'sanityConfigDocument',
            title: 'Studio',
            type: 'sanityConfigObject',
            fieldset: 'integrations',
        }),
        defineField({
            name: 'vercelConfigDocument',
            title: 'Frontend Deployment',
            type: 'vercelConfigObject',
            fieldset: 'integrations',
        }),
        defineField({
            name: 'githubConfigDocument',
            title: 'Backend Documentation',
            type: 'githubConfigObject',
            fieldset: 'integrations',
        }),
        defineField({
            name: 'projectstyling',
            title: 'Styling',
            type: 'projectStylingConfigObject',
            fieldset: 'projectstyling',
        }),
    ],
    fieldsets: [
        { name: 'projectInfo', title: 'Project Information', },
        { name: 'integrations', title: 'Integrations', options: { collapsed: true } },
        { name: 'projectstyling', title: 'Project Styling:', options: { collapsed: true }},
    ],
});
