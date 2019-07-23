import {
    REGISTER_USER,
    GET_SIGN_UP_SUCCESS,
    GET_SIGN_UP_FAILURE,
    // VALID_USER,
    // INVALID_USER
} from "../actionTypes/signUp";

export function registerUserAC(userData) {
    return { type: REGISTER_USER, userData };
}

export function getUserSignupSuccess(isSuccess) {
    return { type: GET_SIGN_UP_SUCCESS, isSuccess };
}

export function getUserSignupFailure(error) {
    return { type: GET_SIGN_UP_FAILURE, error };
}