import { defineField, defineType } from 'sanity';
import { SparkleIcon } from '@sanity/icons';

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'video',
      type: 'file',
      title: 'Video',
      options: { accept: 'video/*' },
    }),
  ],
});
