// src/features/users/sagas.ts
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  IFetchCategoriesFilterPayload,
  ICategory,
  ICategoriesFilterAction,
} from '../../interfaces/category-interface';
import axios from 'axios';
import { categorySlice } from '../slices/category-slice';
import { IRestApiResponse } from 'interfaces/api-response-interface';
import API from 'redux/api/post-api';

export function* searchCategoriesGenerator({
  payload,
}: ICategoriesFilterAction): any {
  try {
    const response: IRestApiResponse = yield call(
      axios.get,
      'http://localhost:3000/categories/search?keyword=Clothes Dryers'
    );
    if (response.status === 200) {
      yield put(
        categorySlice.actions.searchCategoriesSucceeded({
          categories: response.data,
        })
      );
    } else {
      yield put(categorySlice.actions.searchCategoriesFailed());
    }
  } catch (error) {
    yield put(categorySlice.actions.searchCategoriesFailed(error.message));
  }
}

export function* CategoriesSaga() {
  yield takeEvery(
    categorySlice.actions.searchCategories,
    searchCategoriesGenerator
  );
}
