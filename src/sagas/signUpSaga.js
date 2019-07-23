import { put } from "redux-saga/effects";
import { getUserSignupSuccess, getUserSignupFailure } from "../actionCreators/signUpAC";

export function* registerUser(userData) {
    console.log("userData_Input***", userData);
    userData = {...userData.userData.state };
    try {
        let usersListResponse = yield fetch(`http://localhost:3000/users`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(userData), // body data type must match "Content-Type" header
        });
        let users = yield usersListResponse.json();
        console.log("Response from signup saga***",users);
        yield put(getUserSignupSuccess(users));
    } catch (err) {
        yield put(getUserSignupFailure(err));
    }
}