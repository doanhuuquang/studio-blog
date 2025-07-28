import {defineField, defineType} from 'sanity'

export const socialType = defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'icon',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})
