import { IUser } from "./user";

export interface IPost {
  userId: string;
  title: string;
  body: string;
  categoryId: string;
  tags: string[];
  mediaId: string[];
  user:IUser
  createdAt:string;
}

export interface IPostRequset {
  posts: IPost[];
}

export interface IPostsState {
  loading: boolean;
  posts: IPost[];
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
