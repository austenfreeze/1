/* DOCUMENTS */
import user from './documents/user';
import project from './documents/project';
import headlines from './documents/headlines';
import task from './documents/task';
import tracker from './documents/tracker';
import taskTrackerSystem from './documents/taskTrackerSystem';
import notes from './documents/notes';
import tagSettings from './objects/tagSettings';
import foia from './documents/foia';
import freesamples from './documents/freesamples';
import stenqoutes from './documents/stenqoutes'; // Fixed path to 'stenqoutes'

/* OBJECTS */
import headline from './objects/headline';
import corsObject from './objects/corsObject';
import sanityConfigObject from './objects/sanityConfigObject';
import vercelConfigObject from './objects/vercelConfigObject';
import sanityApiTokens from './objects/sanityApiTokens';
import sanityPlugins from './objects/sanityPlugins';
import sanityTools from './objects/sanityTools';
import sanityUpgrade from './objects/sanityUpgrade';
import post from './documents/post';
import blockContent from './objects/blockContent';
import stenqoute from './objects/stenqoute';
import article from './documents/article';

export const schemaTypes = [
  /* DOCUMENTS */
  user,
  project,
  headlines,
  post,
  task,
  tracker,
  taskTrackerSystem,
  notes,
  tagSettings,
  freesamples,
  foia,
  stenqoutes, // Add stenqoutes to the schemaTypes array
  article,

  /* OBJECTS */
  headline,
  corsObject,
  sanityConfigObject,
  vercelConfigObject,
  sanityApiTokens,
  sanityPlugins,
  sanityTools,
  sanityUpgrade,
  stenqoute,
  blockContent,
];
