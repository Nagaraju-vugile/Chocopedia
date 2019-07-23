import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    // VALID_USER,
    // INVALID_USER
} from "../actionTypes/loginAT";

export function getUsersAC() {
    return { type: GET_USERS };
}

export function getUsersSuccess(users) {
    return { type: GET_USERS_SUCCESS, users };
}

export function getUsersFailure(error) {
    return { type: GET_USERS_FAILURE, error };
}