import { defineField, defineType } from 'sanity';
import { CalendarIcon } from '@sanity/icons';

export default defineType({
  name: 'experienceList',
  type: 'object',
  title: 'Experience List',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'link',
      title: 'Link',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Link Text',
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'experience',
          title: 'Experience',
          fields: [
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'timeframe',
              title: 'Timeframe',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              company: 'company',
              jobTitle: 'jobTitle',
              timeframe: 'timeframe',
            },
            prepare({ company, jobTitle, timeframe }) {
              return {
                title: `${jobTitle} at ${company}`,
                subtitle: timeframe,
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
      experiences: 'experiences',
    },
    prepare({ title, experiences = [] }) {
      return {
        title: title || 'Experience List',
        subtitle: `${experiences.length} position${experiences.length !== 1 ? 's' : ''}`,
        media: CalendarIcon,
      };
    },
  },
});
