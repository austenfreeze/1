import {defineType, defineField } from 'sanity';

export default defineType({
    name: 'locationInformation',
    title: 'locationInformation',
    type: 'object',
    fields: [
        defineField({
            name: 'filename',
            title: 'File Name',
            type: 'string',
            fieldset: 'local',
        }),
        defineField({
            name: 'localpath',
            title: 'Local Path',
            type: 'string',
            fieldset: 'local',
        }),
        defineField({
            name: 'mediaName',
            title: 'Media Name',
            type: 'string',
            fieldset: 'mediaLibrary',
        }),
        defineField({
            name: 'libraryLink',
            title: 'Library Link',
            type: 'url',
            fieldset: 'mediaLibrary',
        }),
    ],
    fieldsets: [
        {name: 'local', title: 'Local', options: {columns: 2,},},
        {name: 'mediaLibrary', title: 'Media Library', options: {columns: 2},},
    ],
})