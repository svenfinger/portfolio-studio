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
      of: [{ type: 'body' }, { type: 'list' }],
    },
    {
      name: 'right',
      title: 'Right',
      type: 'array',
      of: [{ type: 'body' }, { type: 'list' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Two Columns',
      };
    },
  },
});
