import { StructureBuilder } from 'sanity/structure';
import headlineStructure from './headlineStructure'; // Correct import path

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      headlineStructure(S),  // Include headlineStructure as part of the structure

      // Example for "Project (Root)"
      S.listItem()
        .title('Projects')
        .schemaType('project')
        .child(
          S.documentList()
            .title('Root Project')
            .filter('_type == "project"')
        ),

      S.listItem()
        .title('Task Tracker')
        .schemaType('taskTrackerSystem')  // Ensure this is the correct schema type
        .child(
          S.documentList()
            .title('Task and Tracker Document')
            .schemaType('taskTrackerSystem')  // Ensure this is the correct schema type
            .filter('_type == "taskTrackerSystem"')  // Correct filtering for the single taskandtracker document
        ),
      
      // Example for "Posts" section
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentList()
            .title('Posts Work Up To Articles')
            .filter('_type == "post"')
        ),
              // Article
      S.listItem()
      .title('Articles')
      .schemaType('article')
      .child(
        S.documentList()
          .title('Articles')
          .filter('_type == "article"')
      ),

                      // Example for "Notes"
      S.listItem()
      .title('Notes')
      .schemaType('notes')
      .child(
        S.documentList()
          .title('All Notes')
          .filter('_type == "notes"')
      ),

      // Add the "Free Samples" option under the same "Posts" section
      S.listItem()
        .title('Free Samples')
        .schemaType('freesamples')  // Make sure this matches the name of your freesamples schema
        .child(
          S.documentList()
            .title('All Free Samples')
            .filter('_type == "freesamples"')
        ),
              // FOIA
              S.listItem()
              .title('FOIA Release')
              .schemaType('foia')
              .child(
                S.documentList()
                  .title('All FOIA')
                  .filter('_type == "foia"')
              ),
                            // STEN QOUTES
                            S.listItem()
                            .title('STEN Qoutes')
                            .schemaType('stenqoutes')
                            .child(
                              S.documentList()
                                .title('All STEN QOUTES')
                                .filter('_type == "stenqoutes"')
                            ),
    ]);
};
