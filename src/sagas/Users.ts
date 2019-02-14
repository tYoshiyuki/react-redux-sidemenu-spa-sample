import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import * as Api from '../services/Users';
import { IUsersSearchCondition, IUsersSearchResponse, usersActions } from './../modules/Users';

export function* search(action : Action<IUsersSearchCondition>): SagaIterator {
    const searchCondition: IUsersSearchCondition = action.payload;
    try {
        const response = yield call(Api.searchAPI, searchCondition);
        const result: IUsersSearchResponse = response as IUsersSearchResponse;
        yield put(usersActions.searchAsync.done({ params: searchCondition, result }));
    }
    catch (error) {
        yield put(usersActions.searchAsync.failed({ params: searchCondition, error }));
    }    
}

export default function* usersSaga(): SagaIterator {
    yield takeEvery(usersActions.searchAsync.started, search);
}