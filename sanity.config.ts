import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';
import { media } from 'sanity-plugin-media';
import { presentationTool, defineDocuments, defineLocations } from 'sanity/presentation';

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
  plugins: [
    structureTool({ structure }),
    visionTool(),
    media(),
    presentationTool({
      previewUrl: 'http://localhost:4321',
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/',
            filter: '_type == "page" && isHome == true',
          },
          {
            route: '/:slug',
            filter: '_type == "page" && slug.current == $slug',
          },
          {
            route: '/work/:slug',
            filter: '_type == "work" && slug.current == $slug',
          },
        ]),
        locations: {
          page: defineLocations({
            select: { title: 'title', slug: 'slug.current', isHome: 'isHome' },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: doc?.isHome ? '/' : `/${doc?.slug}`,
                },
              ],
            }),
          }),
          work: defineLocations({
            select: { title: 'title', slug: 'slug.current' },
            resolve: (doc) => ({
              locations: [{ title: doc?.title || 'Untitled', href: `/work/${doc?.slug}` }],
            }),
          }),
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
