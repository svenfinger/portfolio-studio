import { defineType } from 'sanity';

export default defineType({
  name: 'body',
  type: 'object',
  title: 'Body',
  fields: [
    {
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
});
