import request from './request';

const searchApi = async (q) => {
    try {
        const res = await request.get('/movies/search', {
            params: {
                q,
            },
        });

        return res;
    } catch (error) {}
};

export default searchApi;
