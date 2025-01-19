import { defineType, defineField } from 'sanity';

const musicSample = defineType({
    name: 'musicSample',
    title: 'Music Sample',
    type: 'object',
    fieldsets: [{ name: 'musicDetails', title: 'Music Details', options: { collapsible: true, collapsed: false } }],
    fields: [
        defineField({
            name: 'coverArt',
            title: 'Cover Art',
            type: 'image',
            fieldset: 'musicDetails',
            options: { hotspot: true },
        }),
        defineField({
            name: 'name',
            title: 'Track Name',
            type: 'string',
            fieldset: 'musicDetails',
        }),
        defineField({
            name: 'author',
            title: 'Artist',
            type: 'reference',
            to: [{ type: 'author' }],
            fieldset: 'musicDetails',
        }),
        defineField({
            name: 'album',
            title: 'Album',
            type: 'reference',
            to: [{ type: 'album' }],
            fieldset: 'musicDetails',
        }),
        defineField({
            name: 'quotes',
            title: 'Quotes',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'stenqoute' }] }],
            fieldset: 'musicDetails',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            coverArt: 'coverArt',
            artist: 'author.name', // Fetch artist name from the referenced author
            album: 'album.title', // Fetch album title from the referenced album
            releaseDate: 'album.releaseDate', // Assuming the album has a release date field
        },
        prepare({ title, coverArt, artist, album, releaseDate }) {
            return {
                title: title || 'Untitled Track',
                subtitle: `${artist || 'Unknown Artist'} • ${album || 'Unknown Album'} • ${releaseDate ? new Date(releaseDate).getFullYear() : 'No Year'}`,
                media: coverArt || undefined, // Display cover art if available
            };
        },
    },
});

export default musicSample;
