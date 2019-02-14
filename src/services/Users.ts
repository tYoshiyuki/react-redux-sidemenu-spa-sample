import { IUsersSearchCondition, IUsersSearchResponse } from './../modules/Users';
import { fetchApi } from './common';

export const searchAPI = (search: IUsersSearchCondition): Promise<IUsersSearchResponse> => {
    const { results } = search;
    const path = `https://randomuser.me/api/?results=${results}`;
    const init : RequestInit = {
        method: "GET",
    };
    return fetchApi(path, init);    
}
