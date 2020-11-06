import React from 'react';
import { Link } from 'gatsby';
import { format } from 'date-fns';
import { Box, Flex, Text } from '@chakra-ui/core';
import { AiOutlineStar } from 'react-icons/ai';

import { Post } from './types';

const PostsChunkItem = ({ post, index }: { post: Post; index: number }) => {
  const readingTime = `${post.reading_time} MIN READ`;
  const postDate = format(
    new Date(post.published_at ?? Date.now()),
    "dd MMM ''yy"
  ).toUpperCase();
  return (
    <Flex
      alignItems="center"
      padding="1rem 0"
      borderTop={index === 0 ? 'none' : '1px solid #c7c5c5'}
      position="relative"
    >
      <Text flexShrink={0} fontSize="xs" marginRight="15px">
        {postDate}
      </Text>
      <Box
        flexGrow={1}
        overflow="hidden"
        whiteSpace="nowrap"
        paddingRight="0.5rem"
        textOverflow="ellipsis"
        fontSize={{ base: 'md', md: 'lg' }}
      >
        <span>{post.title}</span>
        <Text as="span" fontSize="xs" marginLeft="20px">
          {post?.tags?.map((tag, idx, arr) => {
            return (
              <span key={tag?.name}>
                {tag?.name}
                {idx !== arr.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </Text>
      </Box>
      {post.featured && (
        <Box marginRight="5px">
          <AiOutlineStar />
        </Box>
      )}
      <Text flexShrink={0} fontSize="xs">
        {readingTime}
      </Text>
      <Link to={`/posts/${post.slug}`}>
        <Box position="absolute" top={0} left={0} bottom={0} right={0} />
      </Link>
    </Flex>
  );
};

export default PostsChunkItem;
