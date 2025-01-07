import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'task',
  title: 'Task',
  type: 'object',
  fields: [
    defineField({
      name: 'iconlogo',
      title: 'Icon/Logo',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Task Title',
      type: 'string',
      description: 'The title of the task',
      validation: Rule => Rule.required().min(3).max(100),
      fieldset: 'idinformation',
    }),
    defineField({
      name: 'task',
      title: 'Task',
      type: 'text',
      description: 'Short and concise, with a character limit of 500.',
      validation: Rule => Rule.max(500),
      fieldset: 'idinformation',
    }),
      defineField({
        name: 'tags',
        title: 'Tags',
        type: 'tags', // Use the plugin's tag type
        fieldset: 'idinformation',
      }),
    defineField({
      name: 'dateAdded',
      title: 'Date Added',
      type: 'datetime',
      description: 'The date and time the task was created and added',
      fieldset: 'chronological',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'dateactivated',
      title: 'Date Activated',
      type: 'datetime',
      description: 'The date and time this task was officially undertaken.',
      fieldset: 'chronological',
    }),
    defineField({
      name: 'dueDate',
      title: 'Due Date',
      type: 'datetime',
      description: 'The date and time by which the task should be completed',
      validation: Rule => Rule.required().error('This must be determined at the time the task is added, even if the task is not instantly active.'),
      fieldset: 'chronological',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Queue', value: 'In Queue' },
          { title: 'In Progress', value: 'inProgress' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'dropdown',
      },
      validation: Rule => Rule.required(),
      fieldset: 'status',
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
        layout: 'dropdown', // Display the options in a dropdown
      },
      validation: Rule => Rule.required(),
      fieldset: 'status',
    }),
    defineField({
      name: 'required',
      title: 'Required',
      type: 'array',
      description: 'Pre-established corresponding tasks.',
      of: [{ type: 'reference', to: [{ type: 'task' }] }],
      fieldset: 'requiredandreferenced',
    }),
    defineField({
      name: 'referenced',
      title: 'Referenced',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tracker' }] }],
      description: 'Trackers of unforeseen tasks encountered in the process.',
      fieldset: 'requiredandreferenced',
    }),
    defineField({
      name: 'completionReport',
      title: 'Completion Report',
      type: 'completionReport',
   }),
  ],
  fieldsets: [
    {
      name: 'chronological',
      title: 'Chronological Information',
      description: 'Information regarding the date of completion is addressed below.',
      options: {
        columns: 3, // Setting the number of columns to 3
      },
    },
    {
      name: 'status',
      title: 'Status and Priority',
      options: {
        columns: 2,
      },
    },
    {
      name: 'idinformation',
      title: 'Identifying Information',
    },
    {
      name: 'requiredandreferenced',
      title: 'Required and Referenced',
      options: {
        columns: 2,
      },
    }
  ],
  preview: {
    select: {
      icon: 'iconlogo',  // Select the image field
      title: 'title',    // Select the title field
      status: 'status',  // Select the status field
      dueDate: 'dueDate', // Select the dueDate field
      priority: 'priority', // Select the priority field
    },
    prepare(selection) {
      const { icon, title, status, dueDate, priority } = selection;
      const statusCapitalized = status ? status.charAt(0).toUpperCase() + status.slice(1) : ''; // Capitalize status value
      const priorityFormatted = priority ? priority.charAt(0).toUpperCase() + priority.slice(1) : 'No priority'; // Capitalize priority value

      // Current date
      const currentDate = new Date();
      const dueDateObj = new Date(dueDate);
      const dueDateFormatted = dueDate ? dueDateObj.toLocaleDateString() : 'No due date';
      
      let dueDateText = dueDateFormatted;

      // Calculate the difference in days between current date and due date
      const timeDiff = dueDateObj.getTime() - currentDate.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      // Logic to determine due date text
      if (dueDate && currentDate.toDateString() === dueDateObj.toDateString()) {
        dueDateText = 'DUE TODAY'; // If due date is today
      } else if (daysDiff === 1) {
        dueDateText = 'DUE TOMORROW'; // If due date is tomorrow
      } else if (daysDiff < 0 && status !== 'completed') {
        const daysLate = Math.abs(daysDiff);
        dueDateText = `${daysLate} DAYS LATE`; // If the task is overdue and not completed
      } else if (daysDiff < 0 && status === 'completed') {
        dueDateText = 'COMPLETE'; // If the task is overdue and marked as complete
      }

      return {
        title: `${title} - ${statusCapitalized}`, // Display title and status together
        media: icon, // Use the icon as the media for the preview
        subtitle: `Priority: ${priorityFormatted} | Due Date: ${dueDateText}`, // Display priority and dueDate in the subtitle
        subtitleStyle: dueDateText === 'COMPLETE' ? { color: 'green' } : dueDateText.includes('DAYS LATE') ? { color: 'red' } : {}, 
      };
    },
  },
});
