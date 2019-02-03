import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';
import { headerActions } from './Header';

export interface ISidebarState {
    isOpen: boolean;
}

const initialState: ISidebarState = {
    isOpen: true,
}

const sidebarReducer = reducerWithInitialState(initialState)
    .case(headerActions.close, (state: ISidebarState) => ({
        ...state,
        isOpen: false,
    }))
    .case(headerActions.open, (state: ISidebarState) => ({
        ...state,
        isOpen: true,        
    }))
    .build();

export default sidebarReducer;