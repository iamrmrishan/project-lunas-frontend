import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  IFetchPostsFilterPayload,
  IPost,
  IPostsFilterAction,
} from "../../interfaces/post-interface";
import axios from "axios";
import { postSlice } from "../slices/post-slice";
import { IRestApiResponse } from "interfaces/api-response-interface";
import API from "redux/api/post-api";

export function* searchPostsGenerator({ payload }: IPostsFilterAction): any {
  try {
    const response: IRestApiResponse = yield call(
      axios.get,
      "http://localhost:3000/posts/search"
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

export function* getPostsByIdGenerator({ payload }: any): any {
  try {
    const response: IRestApiResponse = yield call(
      axios.get,
      `http://localhost:3000/posts/post/${payload}`
    );
    if (response.status === 200) {
      yield put(
        postSlice.actions.getPostByIdSucceeded({
          post: response.data,
        })
      );
    } else {
      console.log("12");

      yield put(postSlice.actions.getPostByIdFailed());
    }
  } catch (error) {
    console.log(error);
    yield put(postSlice.actions.getPostByIdFailed(error.message));
  }
}

export function* PostsSaga() {
  yield takeEvery(postSlice.actions.searchPosts, searchPostsGenerator);
  yield takeEvery(postSlice.actions.getPostById, getPostsByIdGenerator);
}
