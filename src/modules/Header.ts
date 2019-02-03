import actionCreatorFactory, { Action } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';

export interface IHeaderState {
    isOpen: boolean;
}

export interface IHeaderAction {
    close: () => Action<void>,
    open: () => Action<void>,
}

const actionCreator = actionCreatorFactory();

export const headerActions = {
    close: actionCreator<void>('HEADER_CLOSE'),
    open: actionCreator<void>('HEADER_OPEN'),
}

const initialState: IHeaderState = {
    isOpen: true,
}

const headerReducer = reducerWithInitialState(initialState)
    .case(headerActions.close, (state: IHeaderState) => ({
        ...state,
        isOpen: false,
    }))
    .case(headerActions.open, (state: IHeaderState) => ({
        ...state,
        isOpen: true,
    }))
    .build();

export default headerReducer;