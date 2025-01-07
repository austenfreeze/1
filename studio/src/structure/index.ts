import { StructureBuilder } from 'sanity/structure';
import { GiLuckyFisherman } from 'react-icons/gi'; // Icon for 'Headlines'

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      // Headline Structure with Icon
      S.listItem()
        .title('Headlines')
        .icon(GiLuckyFisherman)  // Add the icon to the Headlines section
        .child(
          S.documentList()
            .title('Headlines')
            .filter('_type == "headline"')
        ),
        
      // Spotlight Page as Singleton Document
      S.listItem()
        .title('Spotlight')
        .child(
          S.document()
            .title('Spotlight Page')
            .schemaType('spotLightPage') // Reference the correct schema type
            .id('spotlightPage')  // Specific ID for the singleton document
        ),

      // Projects Section
      S.listItem()
        .title('Projects')
        .child(
          S.documentList()
            .title('Projects')
            .filter('_type == "project"')
        ),

      // Task Tracker Section
      S.listItem()
        .title('Task Tracker')
        .child(
          S.documentList()
            .title('Task Tracker')
            .filter('_type == "taskTrackerSystem"')
        ),

      // Publish Section with Dropdown
      S.listItem()
        .title('Publish')
        .child(
          S.list()
            .title('Publish')
            .items([
              // Posts Section
              S.listItem()
                .title('Posts')
                .child(
                  S.documentList()
                    .title('Posts')
                    .filter('_type == "post"')
                ),
              
              // Articles Section
              S.listItem()
                .title('Articles')
                .child(
                  S.documentList()
                    .title('Articles')
                    .filter('_type == "article"')
                ),
              
              // Notes Section
              S.listItem()
                .title('Notes')
                .child(
                  S.documentList()
                    .title('Notes')
                    .filter('_type == "notes"')
                ),
              
              // Free Samples Section
              S.listItem()
                .title('Free Samples')
                .child(
                  S.documentList()
                    .title('Free Samples')
                    .filter('_type == "freesamples"')
                ),
              
              // FOIA Release Section
              S.listItem()
                .title('FOIA Release')
                .child(
                  S.documentList()
                    .title('FOIA Release')
                    .filter('_type == "foia"')
                ),
              
              // STEN Quotes Section
              S.listItem()
                .title('STEN Quotes')
                .child(
                  S.documentList()
                    .title('STEN Quotes')
                    .filter('_type == "stenquotes"')
                ),
              
              // Spotlight Articles under Publish
              S.listItem()
                .title('Spotlight Articles')
                .child(
                  S.documentList()
                    .title('Spotlight Articles')
                    .filter('_type == "spotlightArticle"')  // Assuming this is your spotlight articles type
                ),
            ])
        ),
    ]);
};
