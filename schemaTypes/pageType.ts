import { defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isHome',
      title: 'Is Home',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showInMenu',
      title: 'Show in Menu',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showInFooter',
      title: 'Show in Footer',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'orderRank',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'twoColumn' }, { type: 'imageGrid' }, { type: 'hero' }],
    }),
  ],
});
