import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID || 'b84na8h5', // Make sure this matches your project ID
    dataset: process.env.SANITY_DATASET || 'production',
  },
  studioHost: 'sten', // Optional: Can specify your Studio host if deployed
  autoUpdates: true,
});
