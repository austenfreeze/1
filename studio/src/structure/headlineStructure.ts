import { StructureBuilder } from 'sanity/structure';

const headlineStructure = (S: StructureBuilder) => {
  return S.listItem()
    .title('Headlines')  // Title for the Headlines section
    .schemaType('headline')  // Use the correct schema type for headlines
    .child(
      S.documentList()
        .title('All Headlines')
        .filter('_type == "headline"')
    );
};

export default headlineStructure;
