import React from 'react';
import { Box } from '@chakra-ui/core';

import Avatar from '@components/Avatar';
import AnimatedRoutes from '@components/AnimatedRoutes';
import SocialButtons from '@components/SocialButtons';

const InformationSection = () => {
  return (
    <Box as="section" marginBottom="1rem" id="information">
      <Avatar />
      <AnimatedRoutes />
      <SocialButtons />
    </Box>
  );
};

export default InformationSection;
