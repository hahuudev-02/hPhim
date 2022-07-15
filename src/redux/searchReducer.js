import { createSlice } from "@reduxjs/toolkit";

export const searchSlices = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        getMovies: (state, action) => {

        }
    }
})

export const { getMovies } = searchSlices.actions;
export default searchSlices.reducer;