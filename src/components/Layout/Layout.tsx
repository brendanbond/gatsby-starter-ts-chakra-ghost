import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/core';

import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box id="rcherry-content">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap"
        />
      </Helmet>
      <Header />
      <Box
        maxWidth="800px"
        margin="auto"
        padding={{ base: '0 35px', md: '0 75px' }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
