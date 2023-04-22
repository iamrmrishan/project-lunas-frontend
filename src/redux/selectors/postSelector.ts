import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "interfaces/root-state";
import { initialState } from "redux/slices/postSlice";

const selectDomain = (state: RootState) => state['feature/posts'] || initialState;

export const selectPosts = createSelector([selectDomain], (IPostState) => IPostState.posts);
export const selectLoader = createSelector([selectDomain], (IPostState) => IPostState.loading);