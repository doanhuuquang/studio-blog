import {defineField, defineType} from 'sanity'

export const shopInfoType = defineType({
  name: 'shopInfo',
  title: 'Shop Info',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logoDark',
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
      name: 'address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
