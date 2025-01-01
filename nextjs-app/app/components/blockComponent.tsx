// /src/components/PortableTextRenderer.tsx

import { PortableText } from '@portabletext/react';

const PortableTextRenderer = ({ content }) => {
  const components = {
    marks: {
      link: ({ value, children }) => {
        const { href, blank } = value;
        return (
          <a href={href} target={blank ? '_blank' : '_self'} rel="noopener noreferrer">
            {children}
          </a>
        );
      },
      internalLink: ({ value, children }) => {
        const { reference } = value;
        return <a href={`/headlines/${reference.slug.current}`}>{children}</a>;
      },
    },
  };

  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;
