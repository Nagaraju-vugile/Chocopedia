import { takeLatest, all } from "redux-saga/effects";
import { GET_BRANDS_LIST, GET_BRAND_DETAILS, GET_CHOCOLATES_LIST, GET_CHOCOLATE_DETAILS } from "../actionTypes/brandAT";
import { getBrands, getBrandDetails } from "./brandsSaga";
import { getChocolates, getChocolateDetails } from "./chocolatesSaga"
import { GET_USERS } from "../actionTypes/loginAT";
import { getUsers } from "./loginSaga";
import { registerUser } from "./signUpSaga";
import { REGISTER_USER } from "../actionTypes/signUp";

export function* brandsWatcherSaga() {
    yield all([
        takeLatest(GET_BRANDS_LIST, getBrands),
        takeLatest(GET_BRAND_DETAILS, getBrandDetails),
        takeLatest(GET_CHOCOLATES_LIST, getChocolates),
        takeLatest(GET_CHOCOLATE_DETAILS, getChocolateDetails),
        takeLatest(GET_USERS, getUsers),
        takeLatest(REGISTER_USER, registerUser)

    ]);
    // yield getChocolates()
}