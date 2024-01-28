import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/categoriesSlice";
import { productReducer } from "./slices/productSlice";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        categories: categoriesReducer,
        filter: filterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
