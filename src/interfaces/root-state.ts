import { IAuthState } from './auth';
import { ICategoriesState } from './category';
import { IPostsState } from './post';

export interface RootState {
  'feature/auth': IAuthState;
  'feature/posts': IPostsState;
  'feature/categories': ICategoriesState;
}
