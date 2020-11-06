import React from 'react';
import { Avatar as ChakraAvatar, Flex } from '@chakra-ui/core';

import AvatarImage from '@assets/images/robert.png';

const Avatar = () => {
  return (
    <Flex justifyContent="center" margin="1rem auto">
      <ChakraAvatar
        name="Robert Cherry"
        size="2xl"
        src={AvatarImage}
        backgroundColor="#999999"
      />
    </Flex>
  );
};

export default Avatar;
