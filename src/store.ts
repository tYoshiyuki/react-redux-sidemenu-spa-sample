import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSaga from 'redux-saga';
import headerRuducer, { IHeaderState } from './modules/Header';
import sidebarReducer, { ISidebarState } from './modules/Sidebar';
import usersReducer, { IUsersState } from './modules/Users';
import rootSaga from './sagas';

export interface IReduxState {
    header: IHeaderState;
    sidebar: ISidebarState;
    users: IUsersState;
}

const saga = createSaga();

export default createStore(
    combineReducers<IReduxState>({
        header: headerRuducer,
        sidebar: sidebarReducer,
        users: usersReducer,
    }),
    composeWithDevTools(
        applyMiddleware(saga, logger)
    )
);

saga.run(rootSaga);