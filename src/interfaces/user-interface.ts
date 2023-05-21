export interface IUser {
  id: string;
  userName: string;
  email: string;
  password: string;
  points: string;
}

export interface ILoggedInUser {
  id: string;
  userName: string;
  email: string;
  points: number;
  createdAt: string,
  updatedAt: string,
}