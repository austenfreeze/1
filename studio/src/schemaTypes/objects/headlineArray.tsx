import {defineType, defineField } from 'sanity';
import { GiDrinking } from "react-icons/gi";



export default defineType({
    name: 'headlineArray',
    title: 'HEADLINES',
    type: 'object',
    icon: GiDrinking,
    fields: [
        defineField({
            name: 'arrayofheadlines',
            title: 'HEADLINES:',
            type: 'array',
        of: [{type: 'headline'}],
            }),
    ],
});