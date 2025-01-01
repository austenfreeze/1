// /home/sten/Desktop/1/studio/src/structure/index.ts

import { StructureBuilder } from 'sanity/structure';
import headlineStructure from './headlineStructure'; // Correct import path

export const structure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      // Directly include headlineStructure as part of the structure
      headlineStructure(S),  // Now you're calling the structure function correctly
      
      // Example for Posts section
      S.listItem()
        .title('Posts')
        .schemaType('post')
        .child(
          S.documentList()
            .title('All Posts')
            .filter('_type == "post"')
        ),
    ]);
};

