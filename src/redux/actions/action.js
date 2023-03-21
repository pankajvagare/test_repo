import { GET_PRODUCT_DETAILS, GET_PRODUCT_LIST } from "../constants";

export function getProductList(payload) {
    return {
        type: GET_PRODUCT_LIST,
        payload
    }
}

export function getProductDetails(payload) {
    return {
        type: GET_PRODUCT_DETAILS,
        payload
    }
}
