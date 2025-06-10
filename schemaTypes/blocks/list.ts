import { defineField, defineType } from 'sanity';
import { ListIcon } from '@sanity/icons';

export default defineType({
  name: 'list',
  type: 'object',
  title: 'List',
  icon: ListIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'List Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'listItem',
          title: 'List Item',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'valueType',
              title: 'Value Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Link', value: 'link' },
                ],
                layout: 'radio',
              },
              initialValue: 'text',
            }),
            defineField({
              name: 'textValue',
              title: 'Text Value',
              type: 'string',
              hidden: ({ parent }) => parent?.valueType !== 'text',
            }),
            defineField({
              name: 'linkValue',
              title: 'Link',
              type: 'object',
              hidden: ({ parent }) => parent?.valueType !== 'link',
              fields: [
                defineField({
                  name: 'text',
                  title: 'Link Text',
                  type: 'string',
                }),
                defineField({
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                }),
                defineField({
                  name: 'openInNewTab',
                  title: 'Open in new tab',
                  type: 'boolean',
                  initialValue: true,
                }),
              ],
            }),
          ],
          preview: {
            select: {
              label: 'label',
              valueType: 'valueType',
              textValue: 'textValue',
              linkText: 'linkValue.text',
              linkUrl: 'linkValue.url',
            },
            prepare({ label, valueType, textValue, linkText, linkUrl }) {
              let subtitle = '';
              if (valueType === 'text') {
                subtitle = textValue || '(No value)';
              } else if (valueType === 'link') {
                subtitle = `${linkText || linkUrl || '(No link)'} ↗`;
              }

              return {
                title: label || '(No label)',
                subtitle,
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items = [] }) {
      return {
        title: title || 'List',
        subtitle: `${items.length} item${items.length !== 1 ? 's' : ''}`,
      };
    },
  },
});
