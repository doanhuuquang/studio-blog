import {defineField, defineType} from 'sanity'

export const carouselType = defineType({
  name: 'carousel',
  title: 'Carousel',
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
      validation: (Rule) => {
        return [Rule.required(), Rule.min(1).max(10), Rule.unique()]
      },
    }),
  ],
})
