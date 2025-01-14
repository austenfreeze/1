import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'studioSettings',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectIcon',
      title: 'Project Icon:',
      type: 'image',
      options: {
        hotspot: true,
      },
      fieldset: 'media',
      group: 'coverPage',
    }),
    defineField({
      name: 'projectCoverPhoto',
      title: 'Project Cover Photo:',
      type: 'image',
      options: { hotspot: true },
      fieldset: 'media',
      group: 'coverPage',
    }),
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .error('A project name of at least 3 characters is required'),
      fieldset: 'projectInfo',
      description: 'Root folder as it is known in the root-local directory.',
      group: 'coverPage',
    }),
    defineField({
      name: 'devDate',
      title: 'Development Began On:',
      type: 'date',
      fieldset: 'projectInfo',
      group: 'coverPage',
      description: 'The date development for this project started.',
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      fieldset: 'projectInfo',
      group: 'coverPage',
      description: 'A detailed description of the project.',
    }),
    defineField({
      name: 'system',
      title: 'Operating System',
      type: 'string',
      options: {
        list: [
          { title: 'Linux', value: 'Linux' },
          { title: 'Windows', value: 'Windows' },
        ],
        layout: 'dropdown',
      },
      description: 'Operating System where Project Files are located on StenHQ.',
      group: 'location',
      fieldset: 'projectLocation',
    }),
    defineField({
      name: 'root',
      title: 'Root Folder Path:',
      type: 'string',
      fieldset: 'projectLocation',
      description: 'Folder path to the project directory at the root-local level.',
      group: 'location',
    }),
    defineField({
      name: 'subdirectories',
      title: 'Subdirectories:',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'projectLocation',
      description: 'Path/To/SecondaryRelevantFolders (Located Within Root).',
      group: 'location',
      hidden: ({ parent }) => !parent?.root, // Only show if root is defined
    }),
    defineField({
      name: 'sanityConfigDocument',
      title: 'Studio',
      type: 'sanityConfigObject',
      group: 'studio',
      description: 'Configuration details for the Sanity Studio.',
    }),
    defineField({
      name: 'vercelConfigDocument',
      title: 'Frontend Deployment',
      type: 'vercelConfigObject',
      group: 'deployment',
      description: 'Configuration for frontend deployment on Vercel.',
    }),
    defineField({
      name: 'githubConfigDocument',
      title: 'Backend Documentation',
      type: 'githubConfigObject',
      group: 'documentation',
      description: 'Documentation stored in the project GitHub repository.',
    }),
    defineField({
      name: 'projectstyling',
      title: 'Styling',
      type: 'projectStylingConfigObject',
      group: 'styling',
      description: 'Styling and design configuration for the project.',
    }),
  ],
  fieldsets: [
    { name: 'projectInfo', title: 'Project Information' },
    { name: 'media', title: 'Media:', options: { columns: 2 } },
    { name: 'projectLocation', title: 'Project Location' },
  ],
  groups: [
    {
      name: 'coverPage',
      title: 'Cover Page',
      default: true,
    },
    {
      name: 'location',
      title: 'Location Information',
    },
    {
      name: 'studio',
      title: 'Sanity Studio',
    },
    {
      name: 'deployment',
      title: 'Vercel Deployment',
    },
    {
      name: 'documentation',
      title: 'GitHub Documentation',
    },
    {
      name: 'styling',
      title: 'Project Styling',
    },
  ],
  preview: {
    select: {
      title: 'projectName',
      subtitle: 'projectDescription',
      media: 'projectIcon',
    },
    prepare(selection: Record<string, any>) {
      const { title, subtitle, media } = selection;
      return {
        title: title || 'Untitled',
        subtitle: subtitle || 'No description',
        media: media || undefined, // Ensure media is correctly handled
      };
    },
  },
});
