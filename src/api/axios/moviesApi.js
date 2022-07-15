import request from './request';

export const getMovies = async (slug) => {
    try {
        const res = await request.get(`/movies/${slug}`);
        return res;
    } catch (error) {
        
    }
}