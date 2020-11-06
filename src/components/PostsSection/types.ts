export type Tags = GatsbyTypes.PostsSectionQuery['allGhostTag']['nodes'];
export type Chunk = GatsbyTypes.PostsSectionQuery['allGhostPost']['nodes'];

export type PostsCache = {
  [x: string]: {
    nextPage: number | null;
    chunks: Chunk[];
  };
};

// TODO: Async in useReducer?
// export enum ActionType {
//   ChangeTopic = 'CHANGE_TOPIC',
//   LoadMorePosts = 'LOAD_MORE_POSTS',
// }

// export type Action = {
//   type: ActionType;
//   payload: string;
// };

// export type State = {
//   postCache: PostCache;
//   loading: boolean;
//   activeTopic: string;
// };
