// File: objects/task.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'task',
  title: 'Task',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the task',
      validation: Rule => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Details of the task',
      validation: Rule => Rule.max(500),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'In Progress', value: 'inProgress' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'radio', // Display the options as radio buttons
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'dueDate',
      title: 'Due Date',
      type: 'datetime',
      description: 'The date and time by which the task should be completed',
    }),
    defineField({
        name: 'priority',
        title: 'Priority',
        type: 'string',
        options: {
          list: [
            { title: 'Low', value: 'low' },
            { title: 'Medium', value: 'medium' },
            { title: 'High', value: 'high' },
          ],
          layout: 'dropdown',  // Display the options in a dropdown
        },
      }),
  ],
});
