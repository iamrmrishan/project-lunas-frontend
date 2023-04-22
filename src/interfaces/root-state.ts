import { IPostsState } from './post';

export interface RootState {
  'feature/posts': IPostsState;
}
