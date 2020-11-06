import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { RouteComponentProps } from '@reach/router';

import GhostPage from '@components/GhostPage';

const About = (props: RouteComponentProps) => {
  const aboutData = useStaticQuery<GatsbyTypes.AboutQuery>(graphql`
    query About {
      ghostPage(title: { eq: "About" }) {
        id
        html
      }
    }
  `);
  const page = aboutData?.ghostPage;

  if (!page || !page.html) throw new Error('About content does not exist');
  return <GhostPage html={page.html} />;
};

export default About;
