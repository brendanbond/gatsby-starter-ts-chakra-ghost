import React from 'react';
import { Flex, HStack, IconButton } from '@chakra-ui/core';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <HStack>
        <IconButton
          colorScheme="facebook"
          icon={<FaFacebook />}
          aria-label="facebook"
        />
        <IconButton
          colorScheme="twitter"
          icon={<FaTwitter />}
          aria-label="twitter"
        />
        <IconButton
          backgroundColor="#fc664f"
          color="white"
          icon={<FaInstagram />}
          aria-label="instagram"
          _hover={{ backgroundColor: '#e35742' }}
        />
      </HStack>
    </Flex>
  );
};

export default SocialButtons;
