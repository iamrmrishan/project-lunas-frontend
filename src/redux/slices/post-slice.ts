import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { access } from 'fs';
import {
  IFetchPostsFilterPayload,
  IPost,
  IPostRequset,
  IPostsState,
} from 'interfaces/post';

export const initialState: IPostsState = {
  loading: false,
  posts: [],
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
  },
});

export default postSlice.reducer;
