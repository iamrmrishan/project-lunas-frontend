import { all } from 'redux-saga/effects';
import { PostsSaga } from './redux/sagas/post-saga';
import { CategoriesSaga } from './redux/sagas/category-saga';


export default function* rootSaga() {
  yield all([
    PostsSaga(),
    CategoriesSaga(),
    // Add more watcher sagas as needed
  ]);
}
