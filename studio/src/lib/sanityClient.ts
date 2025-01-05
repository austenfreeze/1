import { createClient } from '@sanity/client';

// Sanity client setup based on your .env file or the sanity.cli.ts config
export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'b84na8h5',  // Make sure this is correct
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false, // Use the CDN for fast read operations (set to false for fresh data)
});
