import { put } from "redux-saga/effects";
import { getchocolatesListSuccess, getChocolateDetailsFailure, getchocolateDetailsSuccess, getchocolatesListFailure } from "../actionCreators/brandAC";

export function* getChocolates() {
    try {
        // alert('5')
        let chocolatesListResponse = yield fetch("http://localhost:3000/chocolates");
        let chocolates = yield chocolatesListResponse.json();
        console.log("ccssss", chocolates)
        yield put(getchocolatesListSuccess(chocolates));
    } catch (err) {
        yield put(getchocolatesListFailure(err));
    }
}

export function* getChocolateDetails(action) {
    try {
        // let brandsListResponse = yield fetch(`http://localhost:3000/brands/${data.id}`);
        // let brandDetails = yield brandsListResponse.json();
        console.log(`http://localhost:3000/chocolates/${action.id}`);
        let chocolatesByBrandRes = yield fetch(`http://localhost:3000/chocolates/${action.id}`);

        let chocolatesByBrand = yield chocolatesByBrandRes.json();
        console.log(chocolatesByBrand)
            // yield put(getBrandDetailsACSuccess(brandDetails));
            // yield put(getChcolatesByBrand(chocolatesByBrand))
        yield put(getchocolateDetailsSuccess(chocolatesByBrand))
    } catch (err) {
        yield put(getChocolateDetailsFailure(err));
    }
}