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
    defineField({
      name: 'left',
      title: 'Left',
      type: 'array',
      of: [{ type: 'body' }, { type: 'list' }, { type: 'experienceList' }],
    }),
    defineField({
      name: 'right',
      title: 'Right',
      type: 'array',
      of: [{ type: 'body' }, { type: 'list' }, { type: 'experienceList' }],
    }),
  ],
  preview: {
    select: {
      left: 'left',
      right: 'right',
      showDivider: 'showDivider',
    },
    prepare({ left = [], right = [], showDivider = false }) {
      const getContentTypes = (content: any[]): string => {
        if (!Array.isArray(content) || content.length === 0) {
          return '';
        }

        const types = [...new Set(content.map(item => item._type))];
        
        const typeNames = types.map(type => {
          switch (type) {
            case 'body':
              return 'Text';
            case 'list':
              return 'List';
            case 'experienceList':
              return 'Experience List';
            default:
              return type;
          }
        });

        return typeNames.join(', ');
      };

      const leftTypes = getContentTypes(left);
      const rightTypes = getContentTypes(right);

      const subtitleParts = [];
      
      if (leftTypes) {
        subtitleParts.push(`Left: ${leftTypes}`);
      }
      
      if (rightTypes) {
        subtitleParts.push(`Right: ${rightTypes}`);
      }
      
      if (showDivider) {
        subtitleParts.push('Divider');
      }

      return {
        title: 'Two Columns',
        subtitle: subtitleParts.join(' • '),
      };
    },
  },
});
