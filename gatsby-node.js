/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

const POSTS_QUERY = `
{
  allGhostPost(sort: { order: ASC, fields: published_at }) {
    edges {
        node {
            slug
        }
    }
  }
}`;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(POSTS_QUERY);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const posts = result.data.allGhostPost.edges;
  const postTemplate = path.resolve(`./src/templates/PostTemplate.tsx`);

  posts.forEach(({ node }) => {
    node.url = `/posts/${node.slug}/`;

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
