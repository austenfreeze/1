/* DOCUMENTS */
import project from './documents/project';
import headlines from './documents/headlines';
import task from './documents/task';
import tracker from './documents/tracker';
import taskTrackerSystem from './singletons/taskTrackerSystem'; // Updated path to singleton
import notes from './documents/notes';
import tagSettings from './objects/tagSettings';
import foia from './documents/foia';
import freesamples from './documents/freesamples';
import stenqoutes from './documents/stenqoutes'; // Fixed path to 'stenqoutes'
import completionReport from './objects/completionReport';
import source from './documents/source';
import author from './documents/author';
import entity from './documents/entity';
import association from './documents/association';
import { pageType } from './documents/pageType';
import spotlightPage from './documents/spotlightPage';
import studioSettings from './singletons/studioSettings';
import topic from './documents/topic';
import video from './documents/video';
import commentConversation from './documents/commentConversation';
import album from './documents/album';


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
import githubConfigObject from './objects/githubConfigObject';
import projectStylingConfigObject from './objects/projectStylingConfigObject';
import iconCollectionFavorites from './objects/iconCollectionFavorites';
import iconLibs from './objects/iconLibs';
import iconInfo from './objects/iconInfoObject';
import zing from './objects/zing';
import headlineArray from './objects/headlineArray';
import spotlightArticle from './documents/spotlightArticle';
import spotlightContainer from './objects/spotlightContainer';
import spotlightPreviewObject from './objects/spotlightPreviewObject';
import imageGallery from './objects/imageGallery';
import imageCard from './objects/imageCard';
import imageCardDoc from './documents/imageCard';
import imageGalleryDoc from './documents/imageGallery';
import galleryReference from './objects/galleryReference';
import platform from './objects/platform';
import comment from './objects/comment';
import musicSample from './objects/musicSample';
import locationInformation from './objects/locationInformation';
import platformLink from './objects/platformLink';
import videoSample from './objects/videoSample';

export const schemaTypes = [
  /* DOCUMENTS */
  project,
  headlines,
  post,
  task,
  tracker,
  taskTrackerSystem, // Now correctly imported from the singletons directory
  notes,
  tagSettings,
  freesamples,
  foia,
  stenqoutes, // Add stenqoutes to the schemaTypes array
  article,
  source,
  author,
  entity,
  association,
  pageType,
  spotlightArticle,
  spotlightPage,
  studioSettings,
  imageCardDoc,
  imageGalleryDoc,
  topic,
  video,
  commentConversation,


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
  githubConfigObject,
  completionReport,
  projectStylingConfigObject,
  iconCollectionFavorites,
  iconLibs,
  iconInfo,
  zing,
  headlineArray,
  spotlightContainer,
  spotlightPreviewObject,
  imageGallery,
  imageCard,
  galleryReference,
  comment,
  platform,
  musicSample,
  locationInformation,
  platformLink,
  album,
  videoSample,
];
