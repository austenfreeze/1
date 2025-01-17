export default {
  name: 'taskTrackerSystem',
  title: 'Task and Tracker System',
  type: 'document', // This remains 'document' since Sanity doesn't have a specific 'singleton' type. The singleton effect is created via settings in the Studio configuration.
  fields: [
    {
      name: 'newTask',
      type: 'array',
      of: [{ type: 'task' }],
      title: 'New Task',
    },
    {
      name: 'newTracker',
      type: 'array',
      of: [{ type: 'reference',
        to: [{type: 'tracker',}], }],
      title: 'New Tracker',
    },
  ],
  // You can add a singleton setting by ensuring this is treated as a single instance document.
  // This requires you to handle the singleton behavior in the Sanity Studio configuration file,
  // by using the 'singleton' strategy for the document in the Studio's structure settings.
  // Adding a `preview` block for better visual representation in the Studio
  preview: {
    select: {
      title: 'taskTrackerSystem',
      subtitle: 'newTask.length',  // Display number of tasks as a subtitle
    },
    prepare(selection: { title: string; subtitle: number }) { // Explicitly type the selection
      const { title, subtitle } = selection;
      return {
        title: title || 'Untitled Task Tracker System',
        subtitle: subtitle ? `${subtitle} Tasks` : 'No Tasks',
      };
    },
  },
};
