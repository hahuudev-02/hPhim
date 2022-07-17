import request from './request';
import {
    getfullMoviesStart,
    getfullMoviesSucces,
    getfullMoviesError,
    getMovieBySlugError,
    getMovieBySlugStart,
    getMovieBySlugSucces,
} from '~/redux/moviesReducer';

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
