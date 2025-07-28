import {defineType, defineField} from 'sanity'

export const blogOwnerInfoType = defineType({
  name: 'blogOwnerInfo',
  title: 'Blog Owner Info',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatar',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'bio',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
