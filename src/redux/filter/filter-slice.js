import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
    name: "filter",

    initialState: filterInitialState,

    reducers: {
        setFilter(_, { payload }) {
            return payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export  const filterReducer = filterSlice.reducer;