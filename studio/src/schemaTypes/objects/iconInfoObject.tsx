import { defineType, defineField } from 'sanity';

export default defineType({
name: 'iconInfoObject',
title: 'Icon Information',
type: 'object',
fields: [
defineField({
    name: 'iconName',
    title: 'Icon Name',
    type: 'string',
}),
defineField({
    name: 'iconImport',
    title: 'Icon Import CMD',
    type: 'string',
}),
defineField({
    name: 'iconImage',
    title: 'Icon Image',
    type: 'image',
}),
],
})