import { put } from "redux-saga/effects";
import { getBrandsSuccess, getBrandsFailure, getBrandDetailsACSuccess } from "../actionCreators/brandAC";

export function* getBrands() {
    try {
        let brandsListResponse = yield fetch(`http://localhost:3000/brands`);
        let brands = yield brandsListResponse.json();
        yield put(getBrandsSuccess(brands));
    } catch (err) {
        yield put(getBrandsFailure(err));
    }
}

export function* getBrandDetails(data) {
    try {
        let brandsListResponse = yield fetch(`http://localhost:3000/chocolates?brandId=${data.id}`);
        let brandDetails = yield brandsListResponse.json();
        // let chocolatesByBrandRes = yield fetch(`http://localhost:3000/chocolates/${data.id}`);
        // let chocolatesByBrand = yield chocolatesByBrandRes.json();
        yield put(getBrandDetailsACSuccess(brandDetails));
        // yield put(getChcolatesByBrand(chocolatesByBrand))
    } catch (err) {
        yield put(getBrandsFailure(err));
    }
}