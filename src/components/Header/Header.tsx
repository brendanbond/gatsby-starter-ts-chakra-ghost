import React from 'react';
import { Box, Flex } from '@chakra-ui/core';

import Brand from './Brand';
import NavItem from './NavItem';

const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const handleClick = () => setShow(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={{ base: '10px 35px', sm: '10px 75px' }}
      maxWidth="800px"
      margin="auto"
      width="100%"
      borderBottom="1px solid #c7c5c5"
    >
      <Flex align="center">
        <Brand width="85px" />
      </Flex>

      <Box display={{ base: 'block', sm: 'none' }} onClick={handleToggle}>
        <svg
          fill="black"
          width="32px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', sm: 'flex' }}
        justifyContent="space-between"
        width={{ base: 'full', sm: '200px' }}
        alignItems="center"
        flexGrow={0}
      >
        <NavItem to="/" onClick={handleClick}>
          Home
        </NavItem>
        <NavItem to="/about" onClick={handleClick}>
          About
        </NavItem>
        <NavItem to="/contact" onClick={handleClick}>
          Contact
        </NavItem>
      </Box>
    </Flex>
  );
};

export default Header;
