import { GET_PRODUCT_LIST, GET_PRODUCT_DETAILS } from "../constants";
import { InitialState } from "../InitialState";

export function ProducerReducer(state = InitialState, action) {

    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload
            }
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload
            }

        default:
            return {
                ...state
            }
            break;
    }


}