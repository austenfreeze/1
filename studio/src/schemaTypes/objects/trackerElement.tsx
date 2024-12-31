import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'trackerElement',
  title: 'Tracker Element',
  type: 'object',
  fields: [
    defineField({
      name: 'eventName',
      title: 'Event Name',
      type: 'string',
    }),
    defineField({
      name: 'timestamp',
      title: 'Timestamp',
      type: 'datetime',
    }),
    defineField({
      name: 'details',
      title: 'Event Details',
      type: 'text',
    }),
  ],
});
