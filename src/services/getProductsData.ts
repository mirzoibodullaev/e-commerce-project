import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsData = createAsyncThunk(
    "product/getProductsData",
    async () => {
        try {
            const res = await axios.get(
                "https://dummyjson.com/products?limit=8"
            );
            return res.data.products;
        } catch (error: any) {
            console.error("Error fetching product data:", error.message);
        }
    }
);
