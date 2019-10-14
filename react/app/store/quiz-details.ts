import { put, takeLatest, call } from 'redux-saga/effects';
import { getQuiz } from "../api";
import { receive_quiz, receive_error } from "../actions";

function* fetchQuiz() {
  try {
    const json = yield call(getQuiz);
    yield put(receive_quiz(json));
  } catch (error) {
    yield put(receive_error());
  }
}

export function* actionWatcher() {
  yield takeLatest('FETCH_QUIZ', fetchQuiz)
}
