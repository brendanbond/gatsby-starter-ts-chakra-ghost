import React from 'react';
import { Flex } from '@chakra-ui/core';

import GhostContentWrapper from '@components/GhostContentWrapper';

const GhostPage = ({ html }: { html: string }) => {
  return (
    <Flex
      as="section"
      id="about"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="500px"
      margin="1rem auto"
    >
      <GhostContentWrapper html={html} />
    </Flex>
  );
};

export default GhostPage;
