import {defineType} from 'sanity'

export default defineType({
  name: 'twoColumn',
  type: 'object',
  title: 'Two Column Block',
  fields: [
    {
      name: 'left',
      title: 'Left Column',
      type: 'array',
      of: [{type: 'body'}],
    },
    {
      name: 'right',
      title: 'Right Column',
      type: 'array',
      of: [{type: 'body'}],
    },
  ],
})
