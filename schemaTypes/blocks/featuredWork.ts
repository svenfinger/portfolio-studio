import { defineField, defineType } from 'sanity';
import { SparkleIcon } from '@sanity/icons';

export default defineType({
  name: 'featuredWork',
  type: 'object',
  title: 'Featured Work',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'works',
      type: 'array',
      title: 'Select Works',
      of: [
        {
          type: 'reference',
          to: [{ type: 'work' }],
        },
      ],
    }),
  ],
});
