import React from 'react';
import { Box, Flex, Text, Spinner, useBreakpointValue } from '@chakra-ui/core';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import useMediaQuery from '@hooks/useMediaQuery';
import AnimatedTag from '@components/AnimatedTag';
import AllTopicsTopic from '@components/AllTopicsTopic/AllTopicsTopic';

const FeaturedTags = ({
  tags,
  onClickTopic,
  loading,
}: {
  tags: GatsbyTypes.PostsSectionQuery['allGhostTag']['nodes'];
  onClickTopic: (topicSlug: string) => void;
  loading: boolean;
}) => {
  // const visibleSlides = useBreakpointValue({ base: 1, md: 2 });
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const visibleSlides = isSmallScreen ? 1 : 2;
  return (
    <CarouselProvider
      naturalSlideWidth={300}
      naturalSlideHeight={200}
      totalSlides={tags.length + 1}
      visibleSlides={visibleSlides}
      isIntrinsicHeight
    >
      <Box as="section" id="featured-topics" marginBottom="1rem">
        <Flex
          borderBottom="1px solid #c7c5c5"
          marginBottom="10px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Text as="span" fontWeight="bold" marginRight="10px">
              Featured Topics
            </Text>
            {loading && <Spinner size="sm" />}
          </Box>
          <Flex width="50px" justifyContent="space-between">
            <ButtonBack>
              <Flex
                width="20px"
                height="20px"
                backgroundColor="#edf2f7"
                transition="all 250ms ease 0s"
                _hover={{ backgroundColor: '#e2e8f0' }}
                borderRadius="0.25rem"
                justifyContent="center"
                alignItems="center"
              >
                <AiFillCaretLeft />
              </Flex>
            </ButtonBack>
            <ButtonNext>
              <Flex
                width="20px"
                height="20px"
                backgroundColor="#edf2f7"
                transition="all 250ms ease 0s"
                _hover={{ backgroundColor: '#e2e8f0' }}
                borderRadius="0.25rem"
                justifyContent="center"
                alignItems="center"
              >
                <AiFillCaretRight />
              </Flex>
            </ButtonNext>
          </Flex>
        </Flex>
        <Slider>
          <Slide index={0}>
            <AllTopicsTopic onClick={onClickTopic} />
          </Slide>
          {tags.map((tag, index) => (
            <Slide key={tag.id} index={index + 1}>
              <AnimatedTag tag={tag} onClick={onClickTopic} />
            </Slide>
          ))}
        </Slider>
      </Box>
    </CarouselProvider>
  );
};

export default FeaturedTags;
