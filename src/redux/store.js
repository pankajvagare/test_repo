import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducer/rootReducer";

// 1. Configuration of Store
export const store = configureStore({
    reducer: RootReducer
})