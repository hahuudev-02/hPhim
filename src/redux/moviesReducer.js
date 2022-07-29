import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        getfullMovies: {
            currentMovies: null,
            isLoading: false,
            isError: false,
        },
        getMovieBySlug: {
            currentMovies: null,
            isLoading: false,
            isError: false,
        },
        uploatMovie: {
            currentMovies: null,
            isLoading: false,
            isError: false,
        }
    },
    reducers: {
        getfullMoviesStart: (state) => {
            state.getfullMovies.isLoading = true;
            state.getfullMovies.isError = false;
        },
        getfullMoviesSucces: (state, actions) => {
            state.getfullMovies.isLoading = false;
            state.getfullMovies.currentMovies = actions.payload;
            state.getfullMovies.isError = false;
        },
        getfullMoviesError: (state) => {
            state.getfullMovies.isLoading = false;
            state.getfullMovies.isError = true;
        },
        //getMovieBySlug
        getMovieBySlugStart: (state) => {
            state.getMovieBySlug.isLoading = true;
            state.getMovieBySlug.isError = false;
        },
        getMovieBySlugSucces: (state, actions) => {
            state.getMovieBySlug.isLoading = false;
            state.getMovieBySlug.currentMovies = actions.payload;
            state.getMovieBySlug.isError = false;
        },
        getMovieBySlugError: (state) => {
            state.getMovieBySlug.isLoading = false;
            state.getMovieBySlug.isError = true;
        },
        // Uploat movies
        uploatMovieStart: (state) => {
            state.uploatMovie.isLoading = true;
            state.uploatMovie.isError = false;
        },
        uploatMovieSucces: (state, actions) => {
            state.uploatMovie.isLoading = false;
            state.uploatMovie.currentMovies = actions.payload;
            state.uploatMovie.isError = false;
        },
        uploatMovieError: (state) => {
            state.uploatMovie.isLoading = false;
            state.uploatMovie.isError = true;
        },
    },
});

export const {
    getfullMoviesStart,
    getfullMoviesSucces,
    getfullMoviesError,
    getMovieBySlugStart,
    getMovieBySlugSucces,
    getMovieBySlugError,
    uploatMovieStart,
    uploatMovieSucces,
    uploatMovieError
} = moviesSlice.actions;
export default moviesSlice.reducer;
