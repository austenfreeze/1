import { defineType, defineField } from 'sanity';

export default defineType({
    
  name: 'iconLibs',
  title: 'Icon Libraries',
  type: 'object',
  fields: [
    defineField({
        name: 'logoImage',
        title: 'Collection Logo Image',
        type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [{ type: 'url' }],
    }),
    defineField({
        name: 'collections',
        title: 'Icon Library Collections',
        type: 'array',
        of: [{type: 'iconLibraryCollectionFavsObject'}],
    }),
  ],
  fieldsets: [{ name: 'iconLibraries', title: 'Icon Libraries',}],
});
