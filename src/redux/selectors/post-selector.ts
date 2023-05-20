import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'interfaces/root-state-interface';
import { initialState } from 'redux/slices/post-slice';

const selectDomain = (state: RootState) =>
  state['feature/posts'] || initialState;

export const selectPosts = createSelector(
  [selectDomain],
  (IPostState) => IPostState.posts
);
export const selectLoader = createSelector(
  [selectDomain],
  (IPostState) => IPostState.loading
);
export const selectSinglePost = createSelector(
  [selectDomain],
  (IPostState) => IPostState.post
);
