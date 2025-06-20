import { defineType } from 'sanity';
import { ProjectsIcon } from '@sanity/icons';

export default defineType({
  name: 'workMediaGrid',
  type: 'object',
  title: 'Work Media Grid',
  icon: ProjectsIcon,
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
      mediaItems: 'mediaItems',
      text: 'text',
      columns: 'columns',
      layout: 'layout',
    },
    prepare({ mediaItems = [], text = [], columns }) {
      const mediaCount = Array.isArray(mediaItems) ? mediaItems.length : 0;
      const textLength = Array.isArray(text) ? text.length : 0;

      return {
        title: 'Work Media Grid',
        subtitle: `${mediaCount} item${mediaCount !== 1 ? 's' : ''} • ${columns} columns • ${textLength} text block${textLength !== 1 ? 's' : ''}`,
        media: mediaItems?.[0],
      };
    },
  },
});
