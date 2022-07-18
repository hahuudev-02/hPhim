import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        Userlogin: {
            currentUser: null,
            isLoading: false,
            isError: false,
        },
        users: {

        }
    },
    reducers: {
        loginStart: (state) => {
            state.Userlogin.isLoading = true;
            state.Userlogin.isError = false;
        },
        loginSuccess: (state, actions) => {
            state.Userlogin.isLoading = false;
            state.Userlogin.currentUser = actions.payload;
            state.Userlogin.isError = false;
        },
        loginError: (state) => {
            state.Userlogin.isLoading = false;
            state.Userlogin.isError = true;
        },
    },
});

export const { loginStart, loginSuccess, loginError } = authSlice.actions;
export default authSlice.reducer;
