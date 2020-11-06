import React from 'react';

import Layout from '@components/Layout';
import InformationSection from '@components/InformationSection';
import PostsSection from '@components/PostsSection';

const IndexPage = () => {
  return (
    <Layout>
      <InformationSection />
      <PostsSection />
    </Layout>
  );
};

export default IndexPage;
