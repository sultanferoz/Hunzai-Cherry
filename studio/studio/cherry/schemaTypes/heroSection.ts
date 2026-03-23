import { defineField, defineType } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Button Text',
      type: 'string',
      initialValue: 'Explore',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Button Text',
      type: 'string',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'primaryImage',
      title: 'Primary Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'secondaryImage',
      title: 'Secondary Image (Small Plant)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featuredProduct',
      title: 'Featured Product Card',
      type: 'reference',
      to: [{ type: 'product' }],
      description: 'Product to feature in hero section',
    }),
  ],
});
