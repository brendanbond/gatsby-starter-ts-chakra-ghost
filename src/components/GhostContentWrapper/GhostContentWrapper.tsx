import React from 'react';

const GhostContentWrapper = ({ html }: { html: string }) => {
  return (
    <div
      className="ghost-content load-external-scripts"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default GhostContentWrapper;
