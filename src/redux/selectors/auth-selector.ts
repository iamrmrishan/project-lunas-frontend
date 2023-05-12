import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'interfaces/root-state';
import { initialState } from 'redux/slices/auth-slice';

const selectDomain = (state: RootState) =>
  state['feature/auth'] || initialState;

export const selectLoader = createSelector(
  [selectDomain],
  (IAuthState) => IAuthState.loading
);
