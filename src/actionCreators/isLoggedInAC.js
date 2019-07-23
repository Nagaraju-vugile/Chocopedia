import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from "../actionTypes/loginAT";

export function setLoginSuccess() {
    console.log('!!!!!')
    return { type: LOGIN_SUCCESS };
}

export function setLogoutSuccess() {
    return { type: LOGOUT_SUCCESS };
}
