import person from './documents/person'
import page from './documents/page'
import post from './documents/post'
import callToAction from './objects/callToAction'
import infoSection from './objects/infoSection'
import settings from './singletons/settings'
import link from './objects/link'
import blockContent from './objects/blockContent'
import trackerElement from './objects/trackerElement';
import tracker from './documents/tracker';

export const schemaTypes = [
  settings,
  page,
  post,
  person,
  blockContent,
  infoSection,
  callToAction,
  link,
  trackerElement,
  tracker,
]
