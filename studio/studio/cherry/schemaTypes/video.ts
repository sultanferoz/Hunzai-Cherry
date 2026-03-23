import { defineField, defineType } from 'sanity';

export const video = defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Video Description',
      type: 'text',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: {
        accept: 'video/*',
      },
      description: 'Upload MP4, WebM, or other video formats',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Or provide a YouTube/Vimeo URL',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'Product Demo', value: 'demo' },
          { title: 'Testimonial', value: 'testimonial' },
          { title: 'Care Guide', value: 'care-guide' },
          { title: 'Unboxing', value: 'unboxing' },
          { title: 'Tutorial', value: 'tutorial' },
        ],
      },
    }),
    defineField({
      name: 'relatedProduct',
      title: 'Related Product',
      type: 'reference',
      to: [{ type: 'product' }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Video',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'duration',
      title: 'Duration (seconds)',
      type: 'number',
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
      title: 'title',
      media: 'thumbnail',
      type: 'videoType',
    },
    prepare({ title, media, type }) {
      return {
        title: `${title} (${type})`,
        media,
      };
    },
  },
});
