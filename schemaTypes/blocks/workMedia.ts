import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'workMedia',
  type: 'object',
  title: 'Work Media',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'video',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'text',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      text: 'text',
      image: 'image',
    },
    prepare({ text, image }) {
      return {
        title: 'Work Media',
        subtitle: text,
        media: image || ImageIcon,
      };
    },
  },
});
