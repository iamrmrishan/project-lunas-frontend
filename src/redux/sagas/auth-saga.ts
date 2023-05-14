// sagas/auth.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { ILoginUserAction, ISignupUserAction } from 'interfaces/auth';
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
    console.log(response);
    if (response.status === 201) {
      yield put(
        authSlice.actions.loginSuccess({
          token: response.data.Authorization,
          expiresIn: response.data.expiresIn,
          user: response.data.data,
        })
      );
    } else {
      yield put(authSlice.actions.loginFailure('Invalid email or password'));
    }
  } catch (error) {
    yield put(authSlice.actions.loginFailure('Invalid email or password'));
  }
}

export function* signupGenerator({ payload }: ISignupUserAction) {
  try {
    const response: IRestApiResponse = yield call(
      axios.post,
      'http://localhost:3000/auth/register',
      payload
    );
    console.log(response.data.data.Authorization, 'this is token');
    if (response.status === 201) {
      yield put(
        authSlice.actions.signupSuccess({
          token: response.data.data.Authorization,
          expiresIn: response.data.data.expiresIn,
          user: response.data.data.user,
        })
      );
    } else {
      yield put(
        authSlice.actions.signupFailure('Signup failed. Please try again later')
      );
    }
  } catch (error) {
    yield put(
      authSlice.actions.loginFailure('Signup failed. Please try again later')
    );
  }
}

export function* AuthSaga() {
  yield takeLatest(authSlice.actions.loginRequest, loginGenerator);
  yield takeLatest(authSlice.actions.signupRequest, signupGenerator);
}
