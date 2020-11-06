import React from 'react';
import { Box } from '@chakra-ui/core';

import { Chunk } from '@components/PostsSection/types';
import PostsChunkItem from '@components/PostsChunkItem';

const PostsChunk = ({ posts }: { posts: Chunk }) => {
  return (
    <Box
      id="posts-chunk"
      width={{ base: '100%', md: '80%' }}
      padding="1rem 0"
      margin="auto"
    >
      {posts.map((post, index) => {
        return <PostsChunkItem key={post.id} post={post} index={index} />;
      })}
    </Box>
  );
};

export default PostsChunk;
