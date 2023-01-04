import queryString from "query-string";
import { isEqual } from 'lodash';

export const getUrlWithParams = (url, params = null) => {
    if(params === null || isEqual(params, {})) {
        return url;
    }

    return `${url}?${queryString.stringify(params)}`;
};

export const getQueryStringItem = (key, search) => {
    const searchObj = queryString.parse(search);

    if(key in searchObj){
        return searchObj[key];
    }

    return null;
};

export const baseHeaders = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept': 'application/json'
};