import { defineType } from 'sanity';
import { ProjectsIcon } from '@sanity/icons';

export default defineType({
  name: 'imageGrid',
  title: 'Image Grid',
  type: 'object',
  icon: ProjectsIcon,
  fields: [
    {
      name: 'images',
      title: 'Images',
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
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      media: 'images',
    },
    prepare(selection) {
      const { media } = selection;

      if (!media) {
        return { title: 'Image Grid' };
      }
      return {
        title: `Image Grid (${media.length || 0} Item${media.length === 1 ? '' : 's'})`,
        media,
        icon: ProjectsIcon,
      };
    },
  },
});
