import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/categoriesSlice";
import { productReducer } from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        categories: categoriesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
