import { defineType } from 'sanity';
import {SparkleIcon} from '@sanity/icons'

export default defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: SparkleIcon,
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
