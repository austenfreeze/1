import {defineType, defineField} from 'sanity';

export default defineType({
    name: 'corsObject',
    title: 'CORS Origin',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        ],
        });