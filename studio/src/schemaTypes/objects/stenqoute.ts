import {defineType, defineField} from 'sanity'
import { GiFireBreath } from "react-icons/gi";

export default defineType({
  name: 'stenqoute',
  title: 'STEN Quote',
  type: 'document',
  icon: GiFireBreath,
  fields: [
    defineField({
      name: 'quoteNumber',
      title: 'STEN QUOTE #',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  
})
