import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesData, getCategoryItems } from "services/getCategories";
import { Categories, ProductType } from "types/types";

interface CategoriesProps {
    categories: Categories[];
    categoryItem: ProductType[];
    isLoading: boolean;
}

const initialState: CategoriesProps = {
    categories: [],
    categoryItem: [],
    isLoading: false,
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoriesData.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategoriesData.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCategoriesData.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(getCategoryItems.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategoryItems.fulfilled, (state, action) => {
            state.categoryItem = action.payload;
            state.isLoading = false;
        });
        builder.addCase(getCategoryItems.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const selectCategories = (state: { categories: CategoriesProps }) =>
    state?.categories?.categories;

export const selectCategoryItem = (state: { categories: CategoriesProps }) =>
    state.categories.categoryItem;

export const categoriesReducer = categoriesSlice.reducer;
