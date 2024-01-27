import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoriesData = createAsyncThunk(
    "categories/getCategoriesData",
    async () => {
        try {
            const res = await axios.get(
                "https://dummyjson.com/products/categories"
            );
            return res.data;
        } catch (e) {
            throw Error;
        }
    }
);
export const getProductByCategory = createAsyncThunk(
    "categories/getProductByCategory",
    async (item: []) => {
        try {
            const res = await axios.get(
                `https://dummyjson.com/products/category/${item} `
            );
            return res.data.products;
        } catch (e) {
            throw Error;
        }
    }
);
