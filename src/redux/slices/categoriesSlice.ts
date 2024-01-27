import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesData } from "../../services/getCategories";
import { Categories } from "../../types/types";
interface CategoriesProps {
    categories: Categories[];
    isLoading: boolean;
}

const initialState: CategoriesProps = {
    categories: [],
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
            state.isLoading = false;
            state.categories = action.payload;
        });
        builder.addCase(getCategoriesData.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const selectCategories = (state: { categories: CategoriesProps }) =>
    state?.categories?.categories;
export const selectCategoryIsLoading = (state: { categories: CategoriesProps }) =>
    state?.categories?.isLoading;



export const categoriesReducer = categoriesSlice.reducer;
