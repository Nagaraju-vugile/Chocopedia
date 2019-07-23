import { GET_SIGN_UP_SUCCESS, GET_SIGN_UP_FAILURE } from "../actionTypes/signUp";
import { REGISTER_USER } from "../actionTypes/signUp";

const initialState = { isLoading: false };
export default function signUpReducer(prevState = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...prevState,
                isLoading: false,
                data: action.userData

            };
        case GET_SIGN_UP_SUCCESS:
            console.log("success-reducer-signUp");
            return {
                ...prevState,
                isLoading: false,
            };
        case GET_SIGN_UP_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            };
        default:
            return {...prevState };
    }
}