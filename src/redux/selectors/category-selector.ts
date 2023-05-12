import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'interfaces/root-state';
import { initialState } from 'redux/slices/category-slice';

const selectDomain = (state: RootState) =>
  state['feature/categories'] || initialState;

export const selectCategories = createSelector(
  [selectDomain],
  (ICategoriesState) => ICategoriesState.categories
);
export const selectLoader = createSelector(
  [selectDomain],
  (ICategoriesState) => ICategoriesState.loading
);
