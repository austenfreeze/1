import { defineConfig } from 'sanity';
import { structure } from './src/structure';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemaTypes';
import { tags } from 'sanity-plugin-tags';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from 'sanity/presentation';
import { assist } from '@sanity/assist';
import { media } from 'sanity-plugin-media';
import {
  dashboardTool,
  sanityTutorialsWidget,
  projectUsersWidget,
  projectInfoWidget,
} from '@sanity/dashboard';
import { client } from './src/lib/sanityClient'; // Import your client if needed


// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'b84na8h5';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

// URL for preview functionality, defaults to localhost:3000 if not set
const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000';

// Define the home location for the presentation tool
const homeLocation = {
  title: 'Home',
  href: '/',
} satisfies DocumentLocation;

// Main Sanity configuration
export default defineConfig({
  name: 'default',
  title: 'acf',  // Customize the title of your studio
  structure,
  projectId,
  dataset,

  // Plugins
  plugins: [
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget(),
      ],
    }),

    media(), // Media plugin for asset handling

    presentationTool({
      previewUrl: {
        origin: SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/:slug',
            filter: `_type == "page" && slug.current == $slug || _id == $slug`,
          },
          {
            route: '/posts/:slug',
            filter: `_type == "post" && slug.current == $slug || _id == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            locations: [homeLocation],
            message: 'This document is used on all pages',
            tone: 'positive',
          }),
          page: defineLocations({
            select: {
              name: 'name',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.name || 'Untitled',
                  href: resolveHref('page', doc?.slug)!,
                },
              ],
            }),
          }),
          post: defineLocations({
            select: {
              title: 'title',
              slug: 'slug.current',
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || 'Untitled',
                  href: resolveHref('post', doc?.slug)!,
                },
                {
                  title: 'Home',
                  href: '/',
                } satisfies DocumentLocation,
              ].filter(Boolean) as DocumentLocation[],
            }),
          }),
        },
      },
    }),

    structureTool({
      structure, // Custom studio structure configuration, imported from ./src/structure.ts
    }),

    tags({
      options: {
        includeFromReference: true, // Enable reference inclusion for autocomplete
        allowCreate: true, // Allow the creation of new tags
        onCreate: async (inputValue: string) => {
          // Create the new tag based on input
          const newTag = {
            _type: 'tag',
            label: inputValue,
            value: inputValue.toLowerCase().replace(/\s+/g, '-'), // Make it URL friendly
          };
          return newTag; // Return the created tag object
        },
        reactSelectOptions: {
          // Customize the react-select options if needed
          label: 'tag',
          value: 'value',
        },
      },
    }),
    unsplashImageAsset(), // Unsplash plugin for image assets

    assist(), // Assist plugin for AI assistance

    visionTool(), // Vision plugin for analyzing content
  ],

  // Schema configuration
  schema: {
    types: schemaTypes, // Import your schema types here
  },
});

// ResolveHref function to build the URL
function resolveHref(documentType?: string, slug?: string): string | undefined {
  switch (documentType) {
    case 'post':
      return slug ? `/posts/${slug}` : undefined;
    case 'page':
      return slug ? `/${slug}` : undefined;
    default:
      console.warn('Invalid document type:', documentType);
      return undefined;
  }
}
