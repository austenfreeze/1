import { defineType, defineField } from 'sanity';
import { ApiIcon } from '@sanity/icons';

export default defineType({
    name: 'sanityApiTokens',
    title: 'API Token',
    type: 'object',
    icon: ApiIcon, // Corrected: Use the actual imported ApiIcon component here
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'value',
            title: 'Value',  // Capitalized 'value' for consistency in the title
            type: 'string',
            icon: ApiIcon,
        }),
    ],
});
