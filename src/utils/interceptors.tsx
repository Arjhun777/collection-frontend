import Axios from 'axios';
import { getOrSetToken } from './helper';
// @ts-ignore
const { backend } = env_config;
// axios config setup
const apiConfig = {
    baseURL: backend,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
};
const protectedApiConfig = {
    baseURL: backend,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
};

// axios initilize with config provided
export const API = Axios.create(apiConfig);
export const protectedAPI = Axios.create(protectedApiConfig);

// protected api interceptor
protectedAPI.interceptors.request.use((reqConfig) => {
    // request configuration can be set here to set on all protecter api's
    reqConfig.headers.token = getOrSetToken();
    return reqConfig;
});

protectedAPI.interceptors.response.use((resConfig) => {
    // All protectedApi response will be passed through here
    return resConfig;
});