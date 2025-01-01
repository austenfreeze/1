/* DOCUMENTS */
import user from './documents/user'
import project from './documents/project'
import headlines from './documents/headlines'

/* OBJECTS */
import headline from './objects/headline'
import corsObject from './objects/corsObject'
import sanityConfigObject from './objects/sanityConfigObject'
import vercelConfigObject from './objects/vercelConfigObject'
import sanityApiTokens from './objects/sanityApiTokens'
import sanityPlugins from './objects/sanityPlugins'
import sanityTools from './objects/sanityTools'
import sanityUpgrade from './objects/sanityUpgrade'
import post from './documents/post'
import task from './objects/task' 
import taskDocument from './documents/taskDocument'
import blockContent from './objects/blockContent'
export const schemaTypes = [
  /* DOCUMENTS */
  user,
  project,
  headlines,
  post,
  taskDocument,

  /* OBJECTS */
  headline,
  corsObject,
  sanityConfigObject,
  vercelConfigObject,
  sanityApiTokens,
  sanityPlugins,
  sanityTools,
  sanityUpgrade,
  task,
blockContent]
