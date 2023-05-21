import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access } from 'fs';
import {
  IFetchPostsFilterPayload,
  IPost,
  IPostByIdRequset,
  IPostRequset,
  IPostsState,
} from 'interfaces/post-interface';

export const initialState: IPostsState = {
  loading: false,
  posts: [],
  post: {
    id:'',
    userId: '',
    title: '',
    body: '',
    categoryId: '',
    tags: [],
    mediaId: [],
    user: {
      id: '',
      userName: '',
      email: '',
      password: '',
      points: '',
    },
    createdAt: '',

  },
};

export const postSlice = createSlice({
  name: 'feature/posts',
  initialState,
  reducers: {
    searchPosts(
      state: IPostsState,
      _action: PayloadAction<IFetchPostsFilterPayload>
    ) {
      state.loading = true;
    },
    searchPostsSucceeded(
      state: IPostsState,
      action: PayloadAction<IPostRequset>
    ) {
      state.posts = action.payload.posts.map((post) => ({
        ...post,
      }));
      state.loading = false;
    },
    searchPostsFailed(state: IPostsState) {
      state.loading = false;
    },
    getPostById(state: IPostsState, _action: PayloadAction<string>) {
      state.loading = true;
    },
    getPostByIdSucceeded(
      state: IPostsState,
      action: PayloadAction<IPostByIdRequset>
    ) {
      state.post = action.payload.post;
      state.loading = false;
    },
    getPostByIdFailed(state: IPostsState) {
      state.loading = false;
    },
    clearPostById(state: IPostsState) {
      state.post = undefined;
    },
  },
});

export default postSlice.reducer;
