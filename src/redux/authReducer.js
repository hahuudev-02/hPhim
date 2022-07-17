import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isLoading: false,
            isError: false,
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isLoading = true;
            state.login.isError = false;
        },
        loginSuccess: (state, actions) => {
            state.login.isLoading = false;
            state.login.currentUser = actions.payload;
            state.login.isError = false;
        },
        loginStart: (state) => {
            state.login.isLoading = true;
            state.login.isError = false;
        },
    },
});

export const { loginStart, loginSuccess, loginError } = authSlice.actions;
export default authSlice.reducer;
