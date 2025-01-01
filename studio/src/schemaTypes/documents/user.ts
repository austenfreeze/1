import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'user',  // Name of the schema
    title: 'User',  // Title of the schema in the Sanity Studio
    type: 'document',  // Type of schema (document)
    fields: [
        defineField({
            name: 'name',  // Field name
            title: 'Name',  // Title in the studio
            type: 'string',  // Field type (string)
        }),
    ],
})
