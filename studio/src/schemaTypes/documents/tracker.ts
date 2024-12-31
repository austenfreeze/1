import { defineField, defineType } from 'sanity';
import trackerElement from '../objects/trackerElement';

export default defineType({
  name: 'tracker',
  title: 'Tracker',
  type: 'document',
  fields: [
    defineField({
      name: 'trackerElement',
      title: 'Tracker Element',
      type: 'trackerElement', // Referencing the `trackerElement` schema
    }),
    // Other fields can be added here
  ],
  // Use a custom preview for the document title
  preview: {
    select: {
      eventName: 'trackerElement.eventName',
      timestamp: 'trackerElement.timestamp',
    },
    prepare({ eventName, timestamp }) {
      const formattedTimestamp = new Date(timestamp).toLocaleString(); // Format timestamp as a human-readable string
      return {
        title: eventName, // Event name as the title
        subtitle: formattedTimestamp, // Timestamp as the subtitle
      };
    },
  },
});
