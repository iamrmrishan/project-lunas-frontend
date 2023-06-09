// slices/auth.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAuthState,
  ILoginUserPayload,
  ISignupUserPayload,
} from 'interfaces/auth-interface';

export const initialState: IAuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  expiresIn: null,
  token: null,
  user: {
    id: '',
    email: '',
    userName: '',
    points: 0,
    createdAt: '',
    updatedAt: '',
  },
};

export const authSlice = createSlice({
  name: 'feature/auth',
  initialState,
  reducers: {
    loginRequest: (
      state: IAuthState,
      _action: PayloadAction<ILoginUserPayload>
    ) => {
      state.loading = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ expiresIn: string; token: string; user: any }>
    ) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    signupRequest: (
      state: IAuthState,
      _action: PayloadAction<ISignupUserPayload>
    ) => {
      state.loading = true;
    },
    signupSuccess: (
      state,
      action: PayloadAction<{ expiresIn: string; token: string; user: any }>
    ) => {
      console.log(action.payload);
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
      state.expiresIn = action.payload.expiresIn;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    signupFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.expiresIn = null;
      state.token = null;
      state.user = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;

export default authSlice.reducer;
