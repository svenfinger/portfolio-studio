import { defineField, defineType } from 'sanity';
import { InlineIcon } from '@sanity/icons';

export default defineType({
  name: 'twoColumn',
  type: 'object',
  title: 'Two Columns',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'showDivider',
      title: 'Show Divider',
      type: 'boolean',
      initialValue: false,
    }),
    {
      name: 'left',
      title: 'Left',
      type: 'array',
      of: [{ type: 'body' }, { type: 'list' }, { type: 'experienceList' }],
    },
    {
      name: 'right',
      title: 'Right',
      type: 'array',
      of: [{ type: 'body' }, { type: 'list' }, { type: 'experienceList' }],
    },
  ],
  preview: {
    select: {
      left: 'left',
      right: 'right',
      showDivider: 'showDivider',
    },
    prepare({ left = [], right = [], showDivider = false }) {
      const leftCount = Array.isArray(left) ? left.length : 0;
      const rightCount = Array.isArray(right) ? right.length : 0;

      const subtitle = [
        `Left: ${leftCount} item${leftCount !== 1 ? 's' : ''}`,
        `Right: ${rightCount} item${rightCount !== 1 ? 's' : ''}`,
        showDivider ? 'With divider' : 'No divider',
      ].join(' • ');

      return {
        title: 'Two Columns',
        subtitle,
      };
    },
  },
});
