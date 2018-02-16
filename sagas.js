import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';

export function* helloSaga() {
  console.log('first hit Hello Sagas!................................')
}

export function* incrementAsync(){
  // yield delay(1000)
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync(){
  yield takeEvery('ASYNC_INCREMENT', incrementAsync)
}

export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}