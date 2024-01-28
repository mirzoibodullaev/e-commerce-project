import { createSlice } from "@reduxjs/toolkit";
import {
    getProductsData,
} from "../../services/getProductsData";
import { ProductType } from "../../types/types";
import { getProductByCategory } from "../../services/getCategories";

interface ProductsState {
    products: ProductType[];
    isLoading: boolean;
}

const initialState: ProductsState = {
    products: [],
    isLoading: false,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProductsData.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getProductsData.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(getProductByCategory.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProductByCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(getProductByCategory.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const productReducer = productSlice.reducer;

export const selectProducts = (state: { product: ProductsState }) =>
    state?.product?.products;

export const selectIsLoading = (state: { product: ProductsState }) =>
    state?.product?.isLoading;
