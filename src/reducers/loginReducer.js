import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../actionTypes/loginAT";

const initialState = { users: [], isLoading: false };

export default function loginReducer(prevState = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...prevState,
                isLoading: true
            };
        case GET_USERS_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                users: action.users
            };
        case GET_USERS_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            };
        default:
            return {...prevState };
    }
}