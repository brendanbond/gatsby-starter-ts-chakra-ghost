import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

import { useSpring, animated } from 'react-spring';

import useMeasure from 'react-use-measure';
import {
  mapDynamicallyFetchedPostsToStaticallyFetchedPosts,
  fetchPosts,
  getInitialPostsCache,
} from './helpers';
import { PostsCache } from './types';
import FeaturedTags from '@components/FeaturedTags';
import PostsChunk from '@components/PostsChunk';

const PostsSection = () => {
  const staticData = useStaticQuery<GatsbyTypes.PostsSectionQuery>(graphql`
    query PostsSection {
      allGhostTag {
        nodes {
          id
          name
          description
          accent_color
          feature_image
          slug
        }
      }
      allGhostPost(limit: 5) {
        nodes {
          id
          title
          published_at
          reading_time
          featured
          slug
          tags {
            name
          }
        }
      }
    }
  `);

  const [loading, setLoading] = React.useState(false);
  const [activeTag, setActiveTag] = React.useState<string>('all');
  const tags = staticData.allGhostTag.nodes;
  const initialStaticPosts = staticData.allGhostPost.nodes;
  const [postsCache, setPostsCache] = React.useState<PostsCache>(() =>
    getInitialPostsCache(tags, initialStaticPosts)
  );
  const [ref, { height }] = useMeasure();
  const [animationProps, setAnimationProps] = useSpring(() => ({ opacity: 1 }));

  const handleClickTopic = async (topicSlug: string) => {
    if (activeTag === topicSlug || loading) return;
    setLoading(true);
    setAnimationProps({ opacity: 0 });
    if (postsCache[topicSlug].chunks.length > 0) {
      setTimeout(() => {
        setActiveTag(topicSlug);
        setAnimationProps({ opacity: 1 });
        setLoading(false);
      }, 500);
    } else {
      const newPosts = await fetchPosts(1, topicSlug);
      const postsChunk = mapDynamicallyFetchedPostsToStaticallyFetchedPosts(
        newPosts
      );
      setPostsCache((prevState) => {
        return {
          ...prevState,
          [topicSlug]: {
            nextPage: newPosts.meta.pagination.next,
            chunks: [postsChunk],
          },
        };
      });
      setTimeout(() => {
        setAnimationProps({ opacity: 1 });
        setLoading(false);
        setActiveTag(topicSlug);
      }, 500);
    }
  };

  const handleClickLoadMore = async () => {
    const { nextPage } = postsCache[activeTag];
    if (nextPage === null) return;

    const newPostsResponse = await fetchPosts(nextPage, activeTag);
    const postsChunk = mapDynamicallyFetchedPostsToStaticallyFetchedPosts(
      newPostsResponse
    );
    setPostsCache((prevState) => ({
      ...prevState,
      [activeTag]: {
        chunks: [...prevState[activeTag].chunks, postsChunk],
        nextPage: newPostsResponse.meta.pagination.next,
      },
    }));
  };

  console.log('activeTag', activeTag);
  return (
    <Box as="section" id="posts">
      <FeaturedTags
        loading={loading}
        tags={tags}
        onClickTopic={handleClickTopic}
      />
      <Box position="relative" height={height}>
        <animated.div
          style={{
            ...animationProps,
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
          }}
          ref={ref}
        >
          {postsCache[activeTag].chunks.map((chunk) => {
            return <PostsChunk key={chunk[0].id} posts={chunk} />;
          })}
        </animated.div>
      </Box>
      {postsCache[activeTag].nextPage !== null && (
        <Flex justifyContent="center">
          <Button onClick={handleClickLoadMore}>Load More</Button>
        </Flex>
      )}
    </Box>
  );
};

export default PostsSection;
