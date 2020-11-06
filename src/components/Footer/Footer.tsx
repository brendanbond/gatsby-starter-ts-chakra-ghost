import React from 'react';
import { Flex } from '@chakra-ui/core';

const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="2rem 0 2.5rem"
      fontSize="xs"
      color="#999999"
    >
      <div>© 2020 Robert Cherry, Esq.</div>
      <Flex width="150px" justifyContent="space-evenly">
        <span>Terms</span>|<span>Privacy</span>
      </Flex>
    </Flex>
  );
};

export default Footer;
