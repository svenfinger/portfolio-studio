import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'workMedia',
  type: 'object',
  title: 'Work Media',
  icon: ImageIcon,
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [{ name: 'alt', type: 'string', title: 'Alt text' }],
    },
    {
      name: 'video',
      type: 'file',
      title: 'Video',
      options: { accept: 'video/*' },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      media: 'media',
      text: 'text',
    },
    prepare({ media, text = [] }) {
      const textLength = Array.isArray(text) ? text.length : 0;

      return {
        title: 'Work Media',
        subtitle: `${textLength} text block${textLength !== 1 ? 's' : ''}`,
        media: media,
      };
    },
  },
});
