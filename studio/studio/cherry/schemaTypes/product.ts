import { defineType, defineField } from 'sanity';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'emoji',
      title: 'Plant Emoji',
      type: 'string',
      description: 'Single emoji to represent the plant (e.g., 🌿, 🪴)',
    }),
    defineField({
      name: 'price',
      title: 'Price (Rs)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed product description with formatting',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Indoor Plants', value: 'indoor' },
          { title: 'Succulent', value: 'succulent' },
          { title: 'Flowering', value: 'flowering' },
          { title: 'Air Purifying', value: 'air-purifying' },
          { title: 'Low Maintenance', value: 'low-maintenance' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional second image for the product',
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      description: 'Additional product images',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'careInstructions',
      title: 'Care Instructions',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'video',
      title: 'Product Video',
      type: 'reference',
      to: [{ type: 'video' }],
      description: 'Link to a product demo or showcase video',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      emoji: 'emoji',
      media: 'image',
    },
    prepare({ title, emoji, media }) {
      return {
        title: `${emoji} ${title}`,
        media,
      };
    },
  },
});
