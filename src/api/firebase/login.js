import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import request from '~/api/axios';
import { app, analytics } from '~/api/firebase/firebaseConfig';
import { getUserByEmail } from '~/api/axios/userApi';

import { loginStart, loginSuccess, loginError, addToken } from '~/redux/authReducer';
import { lowCaseName } from '~/utilities/lowCaseName';
import { createUser } from '~/api/axios/userApi';

const auth = getAuth();

export const loginWithGG = async (dispatch, navigate) => {
    const provider = new GoogleAuthProvider();
    dispatch(loginStart());
    try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = user.accessToken;
        dispatch(addToken(token))
        let resUser = await getUserByEmail(user.email);
        if (!resUser) {
            const nickNameUser = '@' + lowCaseName(user.displayName);
            const User = {
                name: user.displayName,
                slug: nickNameUser,
                img_user: user.photoURL,
                email: user.email,
            };
            resUser = await createUser(User);
        }

        dispatch(loginSuccess(resUser));
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

        const user = result.user;
        const token = user.accessToken;
        dispatch(addToken(token))
        let resUser = await getUserByEmail(user.email);
        if (!resUser) {
            const nickNameUser = '@' + lowCaseName(user.displayName);
            const User = {
                name: user.displayName,
                slug: nickNameUser,
                img_user: user.photoURL,
                email: user.email,
            };
            resUser = await createUser(User);
        }
        // dispatch(loginSuccess(resUser));
        console.log(resUser);
        navigate('/');
    } catch (error) {
        dispatch(loginError());
    }
};

export const logout = (dispatch, navigate) => {
    auth.signOut();
    dispatch(loginSuccess(null));
    navigate('/login');
};
