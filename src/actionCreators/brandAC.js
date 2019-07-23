import {
    GET_BRANDS_LIST,
    GET_BRANDS_LIST_SUCCESS,
    GET_BRANDS_LIST_FAILURE,

    GET_BRAND_DETAILS,
    GET_BRAND_DETAILS_SUCCESS,
    GET_BRAND_DETAILS_FAILURE,

    GET_CHOCOLATES_LIST,
    GET_CHOCOLATES_LIST_SUCCESS,
    GET_CHOCOLATES_LIST_FAILURE,

    GET_CHOCOLATE_DETAILS,
    GET_CHOCOLATE_DETAILS_SUCCESS,
    GET_CHOCOLATE_DETAILS_FAILURE,

} from "../actionTypes/brandAT";

//brands list
export function getBrandsListAC() {
    return { type: GET_BRANDS_LIST };
}

export function getBrandsSuccess(brands) {
    return { type: GET_BRANDS_LIST_SUCCESS, brands };
}

export function getBrandsFailure(error) {
    return { type: GET_BRANDS_LIST_FAILURE, error };
}

//brand details
export function getBrandDetailsAC(id) {
    return { type: GET_BRAND_DETAILS, id };
}

export function getBrandDetailsACSuccess(brandDetails) {
    return { type: GET_BRAND_DETAILS_SUCCESS, brandDetails };
}

export function getBrandDetailsACFailure(error) {
    return { type: GET_BRAND_DETAILS_FAILURE, error };
}


//chocolate list
export function getChocolatesListAC() {
    return { type: GET_CHOCOLATES_LIST };
}

export function getchocolatesListSuccess(chocolateDetails) {
    return { type: GET_CHOCOLATES_LIST_SUCCESS, chocolateDetails };
}

export function getchocolatesListFailure(error) {
    return { type: GET_CHOCOLATES_LIST_FAILURE, error };
}

//chocolate details
export function getChocolatesDetailsAC(id) {
    return { type: GET_CHOCOLATE_DETAILS, id };
}


export function getChocolateDetailsFailure(error) {
    return { type: GET_CHOCOLATE_DETAILS_FAILURE, error };
}

export function getchocolateDetailsSuccess(chocolatesByBrand) {
    return { type: GET_CHOCOLATE_DETAILS_SUCCESS, chocolatesByBrand };
}