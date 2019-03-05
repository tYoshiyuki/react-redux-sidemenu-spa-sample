import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import usersSaga from './Users';

export default function* rootSaga(): SagaIterator {
    yield all([
        fork(usersSaga),
    ]);
}