import { defineField, defineType } from 'sanity';

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subline',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'industry',
      type: 'string',
    }),
    defineField({
      name: 'company_size',
      type: 'string',
    }),
    defineField({
      name: 'project_team',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'role',
      type: 'text',
    }),
    defineField({
      name: 'process',
      type: 'text',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'workMedia' }, { type: 'workMediaGrid' }],
    }),
  ],
});
