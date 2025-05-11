import { defineField, defineType } from 'sanity';

export const configuration = defineType({
  name: 'configuration',
  title: 'Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'Default Social Share Image',
    }),
  ],
});
