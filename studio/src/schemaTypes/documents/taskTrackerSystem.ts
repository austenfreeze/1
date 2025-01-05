// taskTrackerSystem.ts
export default {
    name: 'taskTrackerSystem',
    title: 'Task and Tracker System',
    type: 'document',
    fields: [
        {
            name: 'docname',
            title: 'Document Name',
            type: 'string',
        },
      {
        name: 'newTask',
        type: 'array',
        of: [{ type: 'task' }],
        title: 'New Task',
      },
      {
        name: 'newTracker',
        type: 'array',
        of: [{ type: 'tracker' }],
        title: 'New Tracker',
      },
    ]
  };
  