import { all } from 'redux-saga/effects';
import { PostsSaga } from './redux/sagas/postSaga';
import { CategoriesSaga } from './redux/sagas/categorySaga';


export default function* rootSaga() {
  yield all([
    PostsSaga(),
    CategoriesSaga(),
    // Add more watcher sagas as needed
  ]);
}
