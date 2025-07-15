import {defineType, defineField} from 'sanity'

export const recommendPostType = defineType({
  name: 'recommendPost',
  title: 'Recommend Post',
  type: 'document',
  fields: [
    defineField({
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}],
        },
      ],
      validation: (Rule) => [Rule.required(), Rule.min(4).max(4), Rule.unique()],
    }),
  ],
})
