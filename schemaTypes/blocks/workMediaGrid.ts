import { defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export default defineType({
  name: 'workMediaGrid',
  type: 'object',
  title: 'Work Media Grid',
  icon: ImageIcon,
  fields: [
    {
      name: 'mediaItems',
      title: 'Media Items',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
        {
          type: 'file',
          title: 'Video',
          options: {
            accept: 'video/*',
          },
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      text: 'text',
      mediaItems: 'mediaItems',
    },
    prepare({ text, mediaItems }) {
      return {
        title: 'Work Media Grid',
        subtitle: text,
        media: mediaItems?.[0] || ImageIcon,
      };
    },
  },
});
