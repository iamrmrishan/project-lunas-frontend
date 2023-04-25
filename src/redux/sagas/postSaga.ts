import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  IFetchPostsFilterPayload,
  IPost,
  IPostsFilterAction,
} from '../../interfaces/post';
import axios from 'axios';
import { postSlice } from '../slices/postSlice';
import { IRestApiResponse } from 'interfaces/api-response';
import API from 'redux/api/postApi';

export function* searchPostsGenerator({ payload }: IPostsFilterAction): any {
  try {
    const response: IRestApiResponse = yield call(
      axios.get,
      'http://localhost:3000/posts/search'
    );
    if (response.status === 200) {
      yield put(
        postSlice.actions.searchPostsSucceeded({
          posts: response.data,
        })
      );
    } else {
      yield put(postSlice.actions.searchPostsFailed());
    }
  } catch (error) {
    yield put(postSlice.actions.searchPostsFailed(error.message));
  }
}

export function* PostsSaga() {
  yield takeEvery(postSlice.actions.searchPosts, searchPostsGenerator);
}
