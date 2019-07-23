import { GET_BRANDS_LIST, GET_BRAND_DETAILS, GET_BRANDS_LIST_SUCCESS, GET_CHOCOLATES_LIST, GET_BRANDS_LIST_FAILURE, GET_BRAND_DETAILS_SUCCESS, GET_BRAND_DETAILS_FAILURE, GET_CHOCOLATES_LIST_SUCCESS, GET_CHOCOLATES_LIST_FAILURE, GET_CHOCOLATE_DETAILS_SUCCESS, GET_CHOCOLATE_DETAILS_FAILURE, GET_CHOCOLATE_DETAILS } from "../actionTypes/brandAT";

const initialState = { brands: [], brandDetails: [], chocolatesByBrand: [], chocolateDetails: [], isLoading: false };
export default function brandsReducer(prevState = initialState, action) {
    switch (action.type) {
        case GET_BRANDS_LIST:
            return {
                ...prevState,
                isLoading: true
            };
        case GET_BRANDS_LIST_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                brands: action.brands
            };
        case GET_BRANDS_LIST_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            };
        case GET_BRAND_DETAILS:
            return {
                ...prevState,
                isLoading: true
            };
        case GET_BRAND_DETAILS_SUCCESS:
            console.log("GET_BRAND_DETAILS_SUCCESS", action)
            return {
                ...prevState,
                isLoading: false,
                brandDetails: action.brandDetails
            };
        case GET_BRAND_DETAILS_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            };
        case GET_CHOCOLATES_LIST:

            return {
                ...prevState,
                isLoading: false,

            };
        case GET_CHOCOLATES_LIST_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                chocolateDetails: action.chocolateDetails
            };
        case GET_CHOCOLATES_LIST_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            };
        case GET_CHOCOLATE_DETAILS:
            return {
                ...prevState,
                isLoading: true
            }
        case GET_CHOCOLATE_DETAILS_FAILURE:
            return {
                ...prevState,
                isLoading: false,
                error: action.error
            };
        case GET_CHOCOLATE_DETAILS_SUCCESS:
            return {
                ...prevState,
                isLoading: false,
                chocolatesByBrand: action.chocolatesByBrand
            }
        default:
            return {...prevState };
    }
}