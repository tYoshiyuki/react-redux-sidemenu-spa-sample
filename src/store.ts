import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import headerRuducer, { IHeaderState } from './modules/Header';
import sidebarReducer, { ISidebarState } from './modules/Sidebar';

export interface IReduxState {
    header: IHeaderState;
    sidebar: ISidebarState;
}

export default createStore(
    combineReducers<IReduxState>({
        header: headerRuducer,
        sidebar: sidebarReducer,
    }),
    composeWithDevTools(
        applyMiddleware(logger)
    )
);