import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

import GhostPage from '@components/GhostPage';

const Home = (props: RouteComponentProps) => {
  const homeData = useStaticQuery<GatsbyTypes.HomeQuery>(graphql`
    query Home {
      ghostPage(title: { eq: "Home" }) {
        id
        html
      }
    }
  `);
  const page = homeData?.ghostPage;

  if (!page || !page.html) throw new Error('Home content does not exist');
  return <GhostPage html={page.html} />;
};

export default Home;
