import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/core';
import { useSpring, animated as a } from 'react-spring';

const AnimatedFlex = a(Flex);

const AnimatedTag = ({
  tag,
  onClick,
}: {
  tag: GatsbyTypes.PostsSectionQuery['allGhostTag']['nodes'][0];
  onClick: (topicSlug: string) => void;
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 1000, friction: 100 },
  });

  const handleClick = () => {
    setIsFlipped(true);
    setTimeout(() => setIsFlipped(false), 3500);
    onClick(tag.slug ?? 'all');
  };

  return (
    <Box
      width={{ base: '75%', md: '300px' }}
      height="200px"
      margin="0 auto"
      onClick={handleClick}
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
        style={{
          opacity: opacity.interpolate((o) => 1 - Number(o)),
          transform,
        }}
        backgroundImage={`url(${tag.feature_image});`}
        backgroundPosition="center"
        backgroundSize="cover"
      />
      <AnimatedFlex
        position="absolute"
        borderRadius="7px"
        top="0"
        left="0"
        bottom="30px"
        right="0"
        justifyContent="center"
        alignItems="center"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
        backgroundColor="#dbd9d9"
      >
        <Text
          padding="0 1rem"
          textAlign="center"
          fontSize={{ base: 'xs', sm: 'md' }}
        >
          {tag.description}
        </Text>
      </AnimatedFlex>
      <Heading
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        size="medium"
        textAlign="center"
      >
        {tag.name}
      </Heading>
    </Box>
  );
};

export default AnimatedTag;
