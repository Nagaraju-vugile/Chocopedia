import { put } from "redux-saga/effects";
import { getUsersSuccess, getUsersFailure } from "../actionCreators/loginAC";

export function* getUsers() {
    try {
        let usersListResponse = yield fetch(`http://localhost:3000/users`);
        let users = yield usersListResponse.json();
        console.log("user Details***",users);
        yield put(getUsersSuccess(users));
    } catch (err) {
        yield put(getUsersFailure(err));
    }
}