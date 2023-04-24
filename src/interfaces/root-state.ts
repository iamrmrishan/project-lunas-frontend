import { ICategoriesState } from './category';
import { IPostsState } from './post';

export interface RootState {
  'feature/posts': IPostsState;
  // 'feature/categories': ICategoriesState;
}
