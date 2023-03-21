import { combineReducers } from "redux";
import { ProducerReducer } from "./productReducer";

export const RootReducer = combineReducers({
    productFeatures:ProducerReducer
})