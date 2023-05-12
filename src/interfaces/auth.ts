import { ILoggedInUser } from './user';

export interface IAuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  expiresIn: string;
  token: string;
  user: ILoggedInUser;
}

export interface AuthContextData {
  isAuthenticated: boolean;
  expiresIn: string | null;
  token: string | null;
  user: ILoggedInUser;
}

export interface ILoginUserPayload {
  email: string;
  password: string;
}

export interface ILoginUserAction {
  payload: ILoginUserPayload;
  type: string;
}
