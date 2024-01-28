import { createSlice } from "@reduxjs/toolkit";

interface filterState {
    title: string;
}

const initialState: filterState = {
    title: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload;
        },
    },
});

export const { setTitleFilter } = filterSlice.actions;

export const titleFilter = (state: { filter: filterState }) =>
    state.filter.title;

export const filterReducer = filterSlice.reducer;
