import request from './request';

export const getFullUser = async (token) => {
    const res = await request.get('/users', {
        headers: {
            token:
                'Bearer ' +
                'eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MDM2NzRlZGE0YmU5NzcyNWI3M2QwZGMwMWYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSMOgIEjhu691IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BRmRadWNvSzdFa2c5bXhrQVZpTFZzN3pQeXQ5UVdqN01JRmdXTkpndUV2Vz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9ocGhpbS01NWIwYiIsImF1ZCI6ImhwaGltLTU1YjBiIiwiYXV0aF90aW1lIjoxNjU5NzE0MTI1LCJ1c2VyX2lkIjoiY3dIcG5od0xsZE1EMkg5bDJwZkc5RFZjb252MSIsInN1YiI6ImN3SHBuaHdMbGRNRDJIOWwycGZHOURWY29udjEiLCJpYXQiOjE2NTk3MTQxMjUsImV4cCI6MTY1OTcxNzcyNSwiZW1haWwiOiJoYWh1dTAxMDMyazJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTU2NzA4ODgzMjMyNzU0MjY1ODEiXSwiZW1haWwiOlsiaGFodXUwMTAzMmsyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.NArjc8YDBQ0zl22Al-7OPXjtQUFVUObX71iguyxue3VcAx2o9I1xBsAhtiNxyBtY4HTyQO6N4OjD_x7ImpmTvnOwkXIb3QQOsO07RW8RX3odoTqEqYoKAZfbwJWGCzk1BdHhZ58on_rcGfbxQWDGEBvsT0jhUofcI0dtvKFiqb8jvF6guyrignlSQWoNrPvZFRBa-73bf_jNK40nwil7pUbTGtuNYhv7bKfEDCzOAFZmRPxwuVRFMUgbDjLhxhpy4QlQdBLr0tUMju0qD9KGGglQusCHW_xek_vGfvk62JXC1JiY9sEs2YJlPPZZiWFcKNFEuI7DxN3d0yTiEOGvZg',
        },
    });
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
