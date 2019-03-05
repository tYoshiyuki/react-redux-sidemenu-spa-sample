import actionCreatorFactory, { Action } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist';

export interface IUsersState {
    error: any;
    isSearching: boolean;
    searchCondition: IUsersSearchCondition | null;
    searchResponse: IUsersSearchResponse | null;    
}

export interface IUsersAction {
    search: (searchCondition: IUsersSearchCondition) => Action<IUsersSearchCondition>,
}

export interface IUsersSearchCondition {
    results: number;
}

export interface IUsersSearchResponse {
    results: IResult[];
    info: IInfo;
}
  
export interface IInfo {
    seed: string;
    results: number;
    page: number;
    version: string;
}
  
export interface IResult {
    gender: string;
    name: IName;
    location: ILocation;
    email: string;
    login: ILogin;
    dob: IDob;
    registered: IDob;
    phone: string;
    cell: string;
    id: IId;
    picture: IPicture;
    nat: string;
}

export interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface IId {
    name: string;
    value: string;
}

export interface IDob {
    date: string;
    age: number;
}

export interface ILogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface ILocation {
    street: string;
    city: string;
    state: string;
    postcode: string;
    coordinates: ICoordinates;
    timezone: ITimezone;
}

export interface ITimezone {
    offset: string;
    description: string;
}

export interface ICoordinates {
    latitude: string;
    longitude: string;
}

export interface IName {
    title: string;
    first: string;
    last: string;
}

const actionCreator = actionCreatorFactory();

export const usersActions = {
    searchAsync: actionCreator.async<IUsersSearchCondition, IUsersSearchResponse>('USERS_FETCH'),
}

const initialState: IUsersState = {
    error: null,
    isSearching: false,
    searchCondition: { results: 10 },
    searchResponse: null,
}

const usersReducer = reducerWithInitialState(initialState)
    .case(usersActions.searchAsync.started, (state: IUsersState, searchCondition: IUsersSearchCondition) => ({
        ...state,
        error: null,
        isSearching: true,
        searchCondition,
    }))
    .case(usersActions.searchAsync.done, (state: IUsersState, payload) => ({
        ...state,
        error: null,
        isSearching: false,
        searchResponse: payload.result,
    }))    
    .build();

export default usersReducer;