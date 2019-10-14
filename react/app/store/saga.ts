import { all } from 'redux-saga/effects';
import { actionWatcher } from './quiz-details';

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
