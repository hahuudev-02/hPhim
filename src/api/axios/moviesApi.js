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
    getAmoutMovieSucces,
} from '~/redux/moviesReducer';

export const getFullMovies = async ({ dispatch, genre = null, page = 1, limit = null }) => {
    dispatch(getfullMoviesStart());
    try {
        const res = await request.get('/movies', {
            params: {
                genre,
                page,
                limit,
            },
        });
        dispatch(getfullMoviesSucces(res.data));
    } catch (error) {
        dispatch(getfullMoviesError());
    }
};

export const getAmoutMovie = async ({ dispatch, genre = null }) => {
    try {
        const res = await request.get('/movies', {
            params: {
                genre,
            },
        });
        dispatch(getAmoutMovieSucces(res.data.length));
    } catch (error) {
        // dispatch(getfullMoviesError());
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

export const uploatMovie = async (dispatch, navigate, data) => {
    dispatch(uploatMovieStart());
    try {
        const { name, arrLinks, category, mainContent, userId } = data;
        const dataMp4s = await arrLinks.map((arrLink, index) => {
            return {
                name: name,
                mp4Link: arrLink,
                chapter: `tap ${index + 1}`,
            };
        });

        const resChapMp4s = await request.post('/chapmp4s', dataMp4s);
        let dataMovie = {
            name: '',
            img_p: '',
            genre: '',
            content: '',
            chapMp4s: [],
        };
        await resChapMp4s.data.forEach((resChapMp4) => {
            let idChapMovie = null;
            if (resChapMp4.mp4Link.indexOf('=') === -1) {
                idChapMovie = resChapMp4.mp4Link.slice(resChapMp4.mp4Link.lastIndexOf('/') + 1);
            } else {
                idChapMovie = resChapMp4.mp4Link.slice(resChapMp4.mp4Link.lastIndexOf('=') + 1);
            }
            const img_p = `https://img.youtube.com/vi/${idChapMovie}/maxresdefault.jpg`;
            dataMovie.chapMp4s.push(resChapMp4._id);

            dataMovie = {
                name: name,
                img_p: img_p,
                genre: category,
                content: mainContent,
                chapMp4s: dataMovie.chapMp4s,
                userId,
            };
        });

        await request.post('/movies', dataMovie);
        dispatch(uploatMovieSucces());
        navigate('/');
    } catch (error) {
        console.log(error);
        dispatch(uploatMovieError(error));
    }
};

export const upDateMovie = async (navigate, slug, data) => {
    const { oldName, name, arrLinks, category, mainContent } = data;
    const dataMp4s = await arrLinks.map((arrLink, index) => {
        return {
            name: oldName,
            mp4Link: arrLink,
            chapter: `tap ${index + 1}`,
        };
    });

    const resChapMp4s = await request.put(`/chapmp4s/${slug}`, dataMp4s);
    const dataMovie = {
        id: data.id,
        name: name,
        arrayLinks: resChapMp4s.data,
        conten: mainContent,
        genre: category,
    };

    await request.put('/movies', dataMovie);
    navigate('/');
};

export const deleteMovie = async (id) => {
    const res = await request.delete(`/movies?id=${id}`);
    return res.data;
};
