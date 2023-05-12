import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'interfaces/root-state';
import { initialState } from 'redux/slices/auth-slice';

const selectDomain = (state: RootState) =>
  state['feature/auth'] || initialState;

export const selectLoader = createSelector(
  [selectDomain],
  (IAuthState) => IAuthState.loading
);

export const selectIsAuthenticated = createSelector(
  [selectDomain],
  (IAuthState) => IAuthState.isAuthenticated
);

export const selectExpiresIn = createSelector(
  [selectDomain],
  (IAuthState) => IAuthState.expiresIn
);

export const selectToken = createSelector(
  [selectDomain],
  (IAuthState) => IAuthState.token
);

export const selectUser = createSelector(
  [selectDomain],
  (IAuthState) => IAuthState.user
);
