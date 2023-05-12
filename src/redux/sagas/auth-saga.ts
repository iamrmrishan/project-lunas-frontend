// sagas/auth.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { ILoginUserAction } from 'interfaces/auth';
import { IRestApiResponse } from 'interfaces/api-response';
import axios from 'axios';
import { authSlice } from '../slices/auth-slice';

export function* loginGenerator({ payload }: ILoginUserAction) {
  try {
    const response: IRestApiResponse = yield call(
      axios.post,
      'http://localhost:3000/auth/login',
      payload
    );
    if (response.status === 201) {
      yield put(
        authSlice.actions.loginSuccess({
          token: response.token,
          expiresIn: response.expiresIn,
          user: response.user,
        })
      );
    } else {
      yield put(authSlice.actions.loginFailure());
    }
  } catch (error) {
    yield put(authSlice.actions.loginFailure(error.message));
  }
}

export function* AuthSaga() {
  yield takeLatest(authSlice.actions.loginRequest, loginGenerator);
}
