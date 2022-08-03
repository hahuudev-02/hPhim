import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import request from '~/api/axios';
import { app, analytics } from '~/api/firebase/firebaseConfig';

import { loginStart, loginSuccess, loginError } from '~/redux/authReducer';

const auth = getAuth();

export const loginWithGG = async (dispatch, navigate) => {
    const provider = new GoogleAuthProvider();
    dispatch(loginStart());
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(credential);
        dispatch(loginSuccess(user));
        navigate('/');
    } catch (error) {
        dispatch(loginError());
    }
};
export const loginWithFb = async (dispatch, navigate) => {
    const provider = new FacebookAuthProvider();
    dispatch(loginStart());
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = FacebookAuthProvider.credentialFromResult(result);

        const token = credential.accessToken;
        const user = result.user;
        dispatch(loginSuccess(user));
        // navigate('/');
    } catch (error) {
        dispatch(loginError());
    }
};

export const logout =  (dispatch, navigate) => {
    auth.signOut();
    dispatch(loginSuccess(null))
    navigate('/login');
}
