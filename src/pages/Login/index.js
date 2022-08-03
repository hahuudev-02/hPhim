import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { loginWithGG, loginWithFb, logout } from '~/api/firebase/login.js';

export default function Login() {
    const user = useSelector((state) => state.auth.Userlogin.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginGG = () => {
        loginWithGG(dispatch, navigate);
    };
    const handleLoginFb = () => {
        loginWithFb(dispatch, navigate);
    };

    return user ? (
        <Navigate to='/' />
    ) : (
        <div className="w-[500px] mx-auto my-24 bg-red-200">
            <button className="" onClick={handleLoginGG}>
                Login with google
            </button>
            <button className="block" onClick={handleLoginFb}>
                Login with facebook
            </button>
        </div>
    );
}
