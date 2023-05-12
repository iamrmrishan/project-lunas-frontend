import { all } from 'redux-saga/effects';
import { PostsSaga } from './redux/sagas/post-saga';
import { CategoriesSaga } from './redux/sagas/category-saga';
import { AuthSaga } from 'redux/sagas/auth-saga';


export default function* rootSaga() {
  yield all([
    PostsSaga(),
    CategoriesSaga(),
    AuthSaga()
    // Add more watcher sagas as needed
  ]);
}
