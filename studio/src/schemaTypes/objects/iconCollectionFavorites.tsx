import { defineType, defineField } from 'sanity';

export default defineType({
name: 'iconLibraryCollectionFavsObject',
title: 'Icon Library Collection Favorites:',
type: 'object',
fields: [
    defineField({
        name: 'logoImage',
        title: 'Library Logo Image',
        type: 'image',
    }),
    defineField({
        name: 'iconCollectionName',
        title: 'Icon Collection Name',
        type: 'string',
        fieldset: 'collectioninfo',
    }),
    defineField({
        name: 'iconCollectionLink',
        title: 'Icon Collection Directory Link',
        type: 'url',
        fieldset: 'collectioninfo',
    }),
    defineField({
        name: 'devLink',
        title: 'Developers Project Link',
        type: 'url',
        fieldset: 'collectioninfo',
    }),
    defineField({
        name: 'iconInfo',
        title: 'iconInfo',
        type: 'array',
        of: [{type: 'iconInfoObject', }],
        fieldset: 'iconInfo',
    }),
],
fieldsets: [
    { name: 'collectioninfo', title: 'collectioninfo'},
    { name: 'iconInfo', title: 'Icon Information',},
],
})