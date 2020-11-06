import React from 'react';
import { useLocation } from '@reach/router';
import { Text } from '@chakra-ui/core';
import { Link } from 'gatsby';

const NavItem = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link to={to} onClick={onClick}>
      <Text
        userSelect="none"
        cursor="pointer"
        fontSize="md"
        mt={{ base: '10px', md: 0 }}
        display="block"
        opacity={0.85}
        color={active ? '#C97B7B' : 'black'}
      >
        {children}
      </Text>
    </Link>
  );
};

export default NavItem;
