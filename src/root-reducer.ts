// src/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './redux/slices/post-slice';
import categoryReducer from './redux/slices/category-slice';
import authReducer from './redux/slices/auth-slice';

const rootReducer = combineReducers({
  'feature/posts': postReducer,
  'feature/categories': categoryReducer,
  'feature/auth': authReducer,
  // Add more reducers as needed
});

export default rootReducer;

// Define RootState type for useSelector hooks
export type RootState = ReturnType<typeof rootReducer>;
