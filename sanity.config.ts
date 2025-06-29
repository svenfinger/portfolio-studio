import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';
import { media } from 'sanity-plugin-media';

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error('Missing SANITY_STUDIO_PROJECT_ID');
}

if (!process.env.SANITY_STUDIO_DATASET) {
  throw new Error('Missing SANITY_STUDIO_DATASET');
}

export default defineConfig({
  name: 'portfolio-studio',
  title: 'Portfolio Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  mediaLibrary: {
    enabled: true,
  },
  plugins: [structureTool({ structure }), visionTool(), media()],
  schema: {
    types: schemaTypes,
  },
});
