import GhostContentAPI, { PostsOrPages } from '@tryghost/content-api';
import { Chunk, PostsCache, Tags } from './types';

const contentAPI = new GhostContentAPI({
  url: 'https://rcherry-blog.youronetruebabe.com',
  key: 'ad04d29048f3f64ced0cbbe6bb',
  version: 'v3',
});

export const mapDynamicallyFetchedPostsToStaticallyFetchedPosts = (
  posts: PostsOrPages
): Chunk => {
  return posts.map((post) => {
    return {
      id: post.id,
      title: post.title,
      published_at: post.published_at === null ? undefined : post.published_at,
      reading_time: post.reading_time,
      featured: post.featured,
      tags: post.tags?.map((tag) => ({
        name: tag.name,
      })),
      slug: post.slug,
    };
  });
};

export const fetchPosts = async (page: number, topic: string) => {
  const res = await contentAPI.posts.browse({
    filter: topic !== 'all' ? `tags:${topic}` : undefined,
    include: `tags`,
    limit: 5,
    page,
  });
  return res;
};

export const getInitialPostsCache = (
  tags: Tags,
  initialStaticPosts: Chunk
): PostsCache => {
  const postCache = {
    all: {
      nextPage: 2,
      chunks: [initialStaticPosts],
    },
  };
  return tags.reduce((acc, curr) => {
    if (!curr.slug)
      throw new Error(`Tag with ID ${curr.id} does not contain slug data`);
    return {
      ...acc,
      [curr.slug]: {
        nextPage: 1,
        chunks: [],
      },
    };
  }, postCache as PostsCache);
};

// TODO: Async in useReducer?
// export const getInitialState = ({
//   topics,
//   initialStaticPosts,
// }: {
//   topics: Topics;
//   initialStaticPosts: Chunk;
// }): State => {
//   let postCache = {
//     all: {
//       nextPage: 2,
//       posts: [initialStaticPosts],
//     },
//   };
//   return {
//     postCache: topics.reduce((acc, curr) => {
//       if (!curr.slug)
//         throw new Error(`Tag with ID ${curr.id} does not contain slug data`);
//       return {
//         ...acc,
//         [curr.slug]: {
//           nextPage: 1,
//           posts: [],
//         },
//       };
//     }, postCache as PostCache),
//     loading: false,
//     activeTopic: 'all',
//   };
// };

// export const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case ActionType.ChangeTopic: {
//       return {
//         ...state,
//         activeTopic: action.payload,
//         postCache:
//           state.postCache[action.payload].posts.length === 0
//             ? mapDynamicallyFetchedPostsToStaticallyFetchedPosts(
//                 fetchPosts(1, action.payload)
//               )
//             : null,
//       };
//     }
//   }
// };
