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
    console.log(response)
    if (response.status === 201) {
      yield put(
        authSlice.actions.loginSuccess({
          token: response.data.Authorization,
          expiresIn: response.data.expiresIn,
          user: response.data.data,
        })
      );
    } else {
      yield put(authSlice.actions.loginFailure(response));
    }
  } catch (error) {
    yield put(authSlice.actions.loginFailure(error.message));
  }
}

export function* AuthSaga() {
  yield takeLatest(authSlice.actions.loginRequest, loginGenerator);
}
