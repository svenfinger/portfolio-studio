import { defineField, defineType } from 'sanity';
import { BlockContentIcon } from '@sanity/icons';

export default defineType({
  name: 'body',
  type: 'object',
  title: 'Body',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
});
