import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        // 🖼️ Thumbnail (Required)
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'reference',
            to: [{ type: 'imageCardDoc' }],
            fieldset: 'content',
            validation: (Rule) => Rule.required().error('A thumbnail is required.'),
        }),

        // 🎥 Video File (Required)
        defineField({
            name: 'video',
            title: 'Video',
            type: 'file',
            fieldset: 'content',
            validation: (Rule) => Rule.required().error('A video file is required.'),
        }),

        // 🏷️ Title (Required, Max 100 chars)
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            fieldset: 'metadata',
            validation: (Rule) =>
                Rule.required().max(100).error('Title is required and must be under 100 characters.'),
        }),

        // 📅 Created On (Autofilled)
        defineField({
            name: 'created',
            title: 'Created On',
            type: 'datetime',
            fieldset: 'metadata',
            validation: (Rule) => Rule.required().error('Creation date is required.'),
            description: 'If possible, ensure authentic timing.',
        }),

        // 🔗 Slug (Required & Unique)
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 100 },
            fieldset: 'metadata',
            validation: (Rule) => Rule.required().error('A unique slug is required.'),
        }),

        // 📄 Description (Max 500 chars)
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'blockContent' }],
            fieldset: 'metadata',
            validation: (Rule) =>
                Rule.max(500).error('Description must be under 500 characters.'),
        }),

        // 🌍 Location Information (Optional)
        defineField({
            name: 'locationInformation',
            title: 'Location Information',
            type: 'locationInformation',
            fieldset: 'metadata',
        }),

        // 🔗 Links (Max 10)
        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [{ type: 'platformLink' }],
            fieldset: 'uploads',
            validation: (Rule) =>
                Rule.max(10).error('You can add up to 10 links.'),
        }),

        // 🎵 Music Samples (Max 5)
        defineField({
            name: 'musicSamples',
            title: 'Music Samples',
            type: 'array',
            of: [{ type: 'musicSample' }],
            fieldset: 'samples',
            validation: (Rule) =>
                Rule.max(5).error('You can add up to 5 music samples.'),
        }),

        // 📹 Video Samples (Max 5)
        defineField({
            name: 'videoSamples',
            title: 'Video Samples',
            type: 'array',
            of: [{ type: 'videoSample' }],
            fieldset: 'samples',
            validation: (Rule) =>
                Rule.max(5).error('You can add up to 5 video samples.'),
        }),

        // 📸 Stills (Max 10)
        defineField({
            name: 'frames',
            title: 'Frames',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'imageGalleryDoc' }] }],
            fieldset: 'stills',
            validation: (Rule) =>
                Rule.max(10).error('You can add up to 10 stills.'),
            description: 'You can select up to 10 frames from the video for its still-image gallery.'
        }),

        // 🗣️ Quotes (Max 5)
        defineField({
            name: 'quotes',
            title: 'Quotes',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'stenqoute' }] }],
            fieldset: 'quotes',
            validation: (Rule) =>
                Rule.max(5).error('You can add up to 5 quotes.'),
        }),

        // 📝 Notes (No Limit)
        defineField({
            name: 'notes',
            title: 'Notes',
            type: 'array',
            of: [{ type: 'notes' }],
        }),
    ],
    fieldsets: [
        { name: 'metadata', title: 'Metadata', options: { collapsible: true, collapsed: true } },
        { name: 'content', title: 'Content' },
        { name: 'samples', title: 'Samples' },
        { name: 'uploads', title: 'Uploads' },
        { name: 'stills', title: 'Stills' },
        { name: 'quotes', title: 'Quotes' },
        { name: 'notes', title: 'Notes' },
    ],
    preview: {
        select: {
            title: 'title',
            thumbnail: 'thumbnail.image', // Assuming 'imageCardDoc' has an 'image' field
            created: 'created',
            videoFile: 'video.asset', // Fetch video file reference if available
        },
        prepare({ title, thumbnail, created, videoFile }) {
            return {
                title: title || 'Untitled Video',
                subtitle: created
                    ? `Created on: ${new Date(created).toLocaleDateString()}`
                    : 'No creation date',
                media: thumbnail || videoFile || undefined, // Display thumbnail first, fallback to video file preview
            };
        },
    },
});
