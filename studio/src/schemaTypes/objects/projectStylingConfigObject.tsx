import { defineType, defineField } from 'sanity';

export default defineType({
name: 'projectStylingConfigObject',
title: 'Project Styling',
type: 'object',
fields: [
    defineField({
        name: 'iconLibs',
        title: 'Icon Libraries',
        type: 'array',
        of: [{type: 'iconLibs'}],
        fieldset: 'iconlibs',
    }),
],
fieldsets: [
    { name: 'iconlibs', title: 'Icon Libraries', options: { collapsed: true } },
],
});
