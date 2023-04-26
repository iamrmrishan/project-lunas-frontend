import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IFetchCategoriesFilterPayload,
  ICategory,
  ICategoriesRequset,
  ICategoriesState,
} from 'interfaces/category';

export const initialState: ICategoriesState = {
  loading: false,
  categories: [],
};

export const categorySlice = createSlice({
  name: 'feature/categories',
  initialState,
  reducers: {
    searchCategories(
      state: ICategoriesState,
      _action: PayloadAction<IFetchCategoriesFilterPayload>
    ) {
      state.loading = true;
    },
    searchCategoriesSucceeded(
      state: ICategoriesState,
      action: PayloadAction<ICategoriesRequset>
    ) {
      state.categories = action.payload.categories.map((category) => ({
        ...category,
      }));
      state.loading = false;
    },
    searchCategoriesFailed(state: ICategoriesState) {
      state.loading = false;
    },
  },
});

export default categorySlice.reducer;