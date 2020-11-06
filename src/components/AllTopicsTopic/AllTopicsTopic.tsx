import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/core';
import { useSpring, animated } from 'react-spring';

import FeaturedImage from '@assets/images/all-topics.jpg';

const AnimatedFlex = animated(Flex);

const AllTopicsTopic = ({
  onClick,
}: {
  onClick: (topicSlug: string) => void;
}) => {
  const [clicked, setClicked] = React.useState(false);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateX(${clicked ? 22 : 0}deg)`,
    config: { mass: 5, tension: 1000, friction: 100 },
  });
  return (
    <Box
      width={{ base: '75%', md: '300px' }}
      height="200px"
      margin="0 auto"
      onClick={() => {
        onClick('all');
        setClicked(true);
        setTimeout(() => setClicked(false), 100);
      }}
      cursor="pointer"
      position="relative"
    >
      <AnimatedFlex
        position="absolute"
        borderRadius="7px"
        top="0"
        left="0"
        bottom="30px"
        right="0"
        justifyContent="center"
        alignItems="center"
        backgroundImage={`url(${FeaturedImage});`}
        backgroundPosition="center"
        backgroundSize="cover"
        style={{
          transform: transform.interpolate((t) => `${t}`),
        }}
      />
      <Heading
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        size="medium"
        textAlign="center"
      >
        All
      </Heading>
    </Box>
  );
};

export default AllTopicsTopic;
