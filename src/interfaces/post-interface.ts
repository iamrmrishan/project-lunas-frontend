import { IUser } from './user-interface';

export interface IPost {
  id:string
  userId: string;
  title: string;
  body: string;
  categoryId: string;
  tags: string[];
  mediaId: string[];
  user?: IUser;
  createdAt: string;
}

export interface IPostRequset {
  posts: IPost[];
}

export interface IPostByIdRequset {
  post: IPost;
}

export interface IPostsState {
  loading: boolean;
  posts: IPost[];
  post: IPost;
}

export interface IFetchPostsFilterPayload {
  keyword: string;
  page: number;
  limit: number;
  sortBy: string;
}

export interface IPostsFilterAction {
  payload: IFetchPostsFilterPayload;
  type: string;
}
