import { IAuthState } from './auth-interface';
import { ICategoriesState } from './category-interface';
import { IPostsState } from './post-interface';

export interface RootState {
  'feature/auth': IAuthState;
  'feature/posts': IPostsState;
  'feature/categories': ICategoriesState;
}
