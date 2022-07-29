import request from './request';
import {
    getfullMoviesStart,
    getfullMoviesSucces,
    getfullMoviesError,
    getMovieBySlugError,
    getMovieBySlugStart,
    getMovieBySlugSucces,
    uploatMovieStart,
    uploatMovieSucces,
    uploatMovieError,
} from '~/redux/moviesReducer';
import { Navigate } from 'react-router';

export const getFullMovies = async (dispatch) => {
    dispatch(getfullMoviesStart());
    try {
        const res = await request.get('/movies');
        dispatch(getfullMoviesSucces(res.data));
    } catch (error) {
        dispatch(getfullMoviesError());
    }
};

export const getMovieBySlug = async (slug, dispatch) => {
    dispatch(getMovieBySlugStart());
    try {
        const res = await request.get(`/movies/${slug}`);
        dispatch(getMovieBySlugSucces(res.data));
    } catch (error) {
        dispatch(getMovieBySlugError());
    }
};

export const uploatMovie = async (navigate, data) => {
    try {
        await request.post('/movies', data);
        navigate('/')
    } catch (error) {
        console.log(error);
    }
};
