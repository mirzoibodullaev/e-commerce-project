import { createSlice } from "@reduxjs/toolkit";
import { getProductsData } from "services/getProductsData";
import { ProductType } from "types/types";

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
    },
});

export const productReducer = productSlice.reducer;

export const selectProducts = (state: { product: ProductsState }) =>
    state?.product?.products;
