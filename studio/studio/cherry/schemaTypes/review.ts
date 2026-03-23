import { defineType, defineField } from 'sanity';

export const reviewType = defineType({
  name: 'review',
  title: 'Customer Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5),
      description: 'Rating from 1 to 5 stars',
    }),
    defineField({
      name: 'comment',
      title: 'Review Comment',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Customer Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'product',
      title: 'Product Reviewed',
      type: 'reference',
      to: [{ type: 'product' }],
      description: 'Link to the product being reviewed',
    }),
    defineField({
      name: 'verified',
      title: 'Verified Purchase',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      rating: 'rating',
      media: 'avatar',
    },
    prepare({ title, rating, media }) {
      return {
        title: `${title} - ⭐ ${rating}/5`,
        media,
      };
    },
  },
});
