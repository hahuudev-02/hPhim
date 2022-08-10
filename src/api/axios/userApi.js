import request from './request';

export const getFullUser = async (token) => {
    const res = await request.get('/users', {
        headers: {
            token:
                'Bearer ' + token
        },
    });
    return res.data;
};

export const getUserByEmail = async (email) => {
    const res = await request.get('/users/email', {
        headers: {
            email,
        },
    });
    return res.data;
};
export const createUser = async (data) => {
    const res = await request.post('/users', data);
    return res.data;
};
