import React from 'react';
import { graphql } from 'gatsby';
import { Box, Heading } from '@chakra-ui/core';
import Image from 'gatsby-image';

import Layout from '@components/Layout';
import GhostContentWrapper from '@components/GhostContentWrapper';

const PostTemplate = ({ data }: { data: GatsbyTypes.PostQuery }) => {
  const image = data.ghostPost?.featureImageSharp?.childImageSharp?.fluid;
  const post = data.ghostPost;

  if (!image) throw new Error('Post must have associated image'); // TODO: add fallback image
  if (!post) throw new Error('Post does not exist');
  if (!post.html) throw new Error('Post html content does not exist');
  return (
    <Layout>
      <Box margin="1rem auto">
        <Image fluid={image} />
        <Heading textAlign="center" size="2xl" padding="1rem 0">
          {post?.title}
        </Heading>
      </Box>
      <GhostContentWrapper html={post.html} />
    </Layout>
  );
};

export default PostTemplate;

export const PostQuery = graphql`
  query Post($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      slug
      featured
      featureImageSharp {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      excerpt
      custom_excerpt
      visibility

      # Dates formatted
      created_at_pretty: created_at(formatString: "DD MMMM, YYYY")
      published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
      updated_at_pretty: updated_at(formatString: "DD MMMM, YYYY")

      # Dates unformatted
      created_at
      published_at
      updated_at

      # SEO
      meta_title
      meta_description
      og_description
      og_image
      og_title
      twitter_description
      twitter_image
      twitter_title

      # Authors
      authors {
        name
        slug
        bio
        # email
        profile_image
        twitter
        facebook
        website
      }
      primary_author {
        name
        slug
        bio
        # email
        profile_image
        twitter
        facebook
        website
      }

      # Tags
      primary_tag {
        name
        slug
        description
        feature_image
        meta_description
        meta_title
        visibility
      }
      tags {
        name
        slug
        description
        feature_image
        meta_description
        meta_title
        visibility
      }

      # Content
      plaintext
      html

      # Additional fields
      url
      canonical_url
      uuid
      codeinjection_foot
      codeinjection_head
      codeinjection_styles
      comment_id
      reading_time
    }
  }
`;
