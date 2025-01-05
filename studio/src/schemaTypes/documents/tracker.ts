export default {
    name: 'tracker',
    title: 'Tracker',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'completionDate',
        title: 'Completion Date',
        type: 'datetime',
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'tags',
      },
    ]}
