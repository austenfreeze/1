import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    // Project Name
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),

    // Project Description
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.max(1000),
    }),

    // Project Status
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Not Started', value: 'not_started'},
          {title: 'In Progress', value: 'in_progress'},
          {title: 'Completed', value: 'completed'},
          {title: 'On Hold', value: 'on_hold'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Project Deadline
    defineField({
      name: 'deadline',
      title: 'Deadline',
      type: 'datetime',
    }),

    // Project Priority
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          {title: 'Low', value: 'low'},
          {title: 'Medium', value: 'medium'},
          {title: 'High', value: 'high'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Associated Tasks for the Project
    defineField({
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'task'}],
        },
      ],
    }),

    // Project Links (e.g., links to GitHub, website, etc.)
    defineField({
      name: 'links',
      title: 'Project Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'linkTitle',
              title: 'Link Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri(),
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Project Documents (e.g., proposals, contracts, etc.)
    defineField({
      name: 'documents',
      title: 'Documents',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            accept: 'application/pdf',
          },
        },
      ],
    }),

    // Additional Notes or Comments
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
});
