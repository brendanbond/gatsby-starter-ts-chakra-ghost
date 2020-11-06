import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Heading } from '@chakra-ui/core';
import Image from 'gatsby-image';

const FeaturedPosts = () => {
  const featuredPostsData = useStaticQuery<
    GatsbyTypes.FeaturedPostsQuery
  >(graphql`
    query FeaturedPosts {
      allGhostPost(filter: { featured: { eq: true } }, limit: 3) {
        nodes {
          id
          slug
          title
          featureImageSharp {
            childImageSharp {
              fluid(maxWidth: 320) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Box as="section" id="featured-posts" marginBottom="2rem">
      <Box
        fontWeight="bold"
        borderBottom="1px solid #c7c5c5"
        marginBottom="10px"
      >
        Featured Articles
      </Box>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        {featuredPostsData.allGhostPost.nodes.map((post) => {
          const featuredImage = post.featureImageSharp?.childImageSharp?.fluid;
          if (!featuredImage)
            throw new Error('Featured posts need featured image');
          return (
            <Flex
              flexDirection="column"
              width={{ base: '100%', md: '25%' }}
              marginBottom={{ base: '2rem', md: '0' }}
              key={post.id}
            >
              <Box marginBottom={{ base: '5px', md: '20px' }}>
                <Image fluid={featuredImage} />
              </Box>
              <Heading size="md">{post.title}</Heading>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default FeaturedPosts;
