import { defineType, defineField } from 'sanity';
import task from '../objects/task';  // Import the Task object schema

export default defineType({
  name: 'taskDocument',
  title: 'Task Document',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'task',
      title: 'task',
      type: 'array',
      of: [{type: 'task'}],
    }),
  ],
});
