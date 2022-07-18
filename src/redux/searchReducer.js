import { createSlice } from '@reduxjs/toolkit';

export const searchSlices = createSlice({
    name: 'search',
    initialState: {
        currentMovies: null,
        isLoading: false,
        isError: false,
    },
    reducers: {
        searchMovieStart: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        searchMoviesSucces: (state, actions) => {
            state.isLoading = false;
            state.currentMovies = actions.payloat;
            state.isError = false;
        },
        searchMoviesError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
});

export const { searchMovieStart, searchMoviesSucces, searchMoviesError } = searchSlices.actions;
export default searchSlices.reducer;
