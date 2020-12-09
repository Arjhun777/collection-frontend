import { createBrowserHistory } from 'history';

export const getOrSetToken = (token?:string) => {
    if (token?.length) localStorage.setItem('token', token);
    else return localStorage.getItem('token');
}

export const emailValidator = (email:string) => {
    return RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
}

export const checkIfLoggedIn = () => {
    if (getOrSetToken()) return true;
    return false;
}

export const logoutClear = () => {
    localStorage.removeItem('token');
}

export const onlyNumbers = (text:string) => /^\d+$/.test(text);