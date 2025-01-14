import { StructureBuilder } from 'sanity/structure';
import { GiLuckyFisherman } from 'react-icons/gi'; // Icon for 'Headlines'
import { FaTasks } from 'react-icons/fa'; // Icon for 'Task Tracker'
import { GiSettingsKnobs } from 'react-icons/gi'; // Icon for 'Studio Settings'

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      // Studio Settings Singleton Section (moved to the top)
      S.listItem()
        .title('Studio Settings')
        .icon(GiSettingsKnobs)  // Choose an appropriate icon for Studio Settings
        .child(
          S.document()
            .title('Studio Settings')
            .schemaType('studioSettings')  // Reference the correct schema type
            .id('studioSettings')  // Set a specific ID to make this a singleton
        ),
      // Divider after Studio Settings
      S.divider(),

      // Task Tracker Singleton Section (moved to the top)
      S.listItem()
        .title('Task Tracker')
        .icon(FaTasks)  // Add an appropriate icon for Task Tracker
        .child(
          S.document()
            .title('Task Tracker System')
            .schemaType('taskTrackerSystem')  // Reference the correct schema type
            .id('taskTrackerSystem')  // Set a specific ID to make this a singleton
        ),
        
      // Divider after Task Tracker
      S.divider(),

      // Headline Structure with Icon
      S.listItem()
        .title('Headlines')
        .icon(GiLuckyFisherman)  // Add the icon to the Headlines section
        .child(
          S.documentList()
            .title('Headlines')
            .filter('_type == "headline"')  // Ensure this matches your schema type
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
            .filter('_type == "project"')  // Ensure this matches your schema type
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
                    .filter('_type == "post"')  // Ensure this matches your schema type
                ),
              
              // Articles Section
              S.listItem()
                .title('Articles')
                .child(
                  S.documentList()
                    .title('Articles')
                    .filter('_type == "article"')  // Ensure this matches your schema type
                ),
              
              // Notes Section
              S.listItem()
                .title('Notes')
                .child(
                  S.documentList()
                    .title('Notes')
                    .filter('_type == "notes"')  // Ensure this matches your schema type
                ),
              
              // Free Samples Section
              S.listItem()
                .title('Free Samples')
                .child(
                  S.documentList()
                    .title('Free Samples')
                    .filter('_type == "freesamples"')  // Ensure this matches your schema type
                ),
              
              // FOIA Release Section
              S.listItem()
                .title('FOIA Release')
                .child(
                  S.documentList()
                    .title('FOIA Release')
                    .filter('_type == "foia"')  // Ensure this matches your schema type
                ),
              
              // STEN Quotes Section
              S.listItem()
                .title('STEN Quotes')
                .child(
                  S.documentList()
                    .title('STEN Quotes')
                    .filter('_type == "stenquotes"')  // Ensure this matches your schema type
                ),
              
              // Spotlight Articles under Publish
              S.listItem()
                .title('Spotlight Articles')
                .child(
                  S.documentList()
                    .title('Spotlight Articles')
                    .filter('_type == "spotlightArticle"')  // Ensure this matches your schema type
                ),
                S.listItem()
                .title('Image')
                .child(
                  S.documentList()
                    .title('Image Card')
                    .filter('_type == "imageCardDoc"')
                    .id('imageCard')  // Add an ID for this list
                ),              
              S.listItem()
              .title('Image Gallery')
              .child(
                S.documentList()
                .title('Image Gallery Collections')
              .filter('_type == "imageGalleryDoc"')
              .id('imageGallery')
            ),

            ])
        ),
    ]);
};
