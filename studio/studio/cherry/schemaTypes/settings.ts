import { defineField, defineType } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'newsletterHeading',
      title: 'Newsletter Heading',
      type: 'string',
      initialValue: 'Subscribe to our newsletter',
    }),
    defineField({
      name: 'newsletterDescription',
      title: 'Newsletter Description',
      type: 'text',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', options: { list: ['facebook', 'twitter', 'instagram', 'youtube', 'tiktok'] } },
            { name: 'url', type: 'url' },
          ],
        }),
      ],
    }),
  ],
});
