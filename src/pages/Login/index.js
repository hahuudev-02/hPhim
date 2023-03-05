import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { loginWithGG, loginWithFb } from '~/api/firebase/login.js';

export default function Login() {
    const user = useSelector((state) => state.currentUser.auth.Userlogin.currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginGG = () => {
        loginWithGG(dispatch, navigate);
    };
    const handleLoginFb = () => {
        loginWithFb(dispatch, navigate);
    };

    return user ? (
        <Navigate to="/" />
    ) : (
        <div className="flex-center h-[100vh]">
            <div className="w-[600px] py-28 bg-red-200 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
                <h3 className="text-2xl text-red-600 font-semibold mb-2">HPHIM</h3>
                <h2 className="mb-12 text-3xl text-[#057655] font-semibold">LOGIN IN WEB MOVIE HAHUU</h2>
                <button
                    className="w-[500px] h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-xl text-white font-semibold"
                    onClick={handleLoginGG}
                >
                    Login with google
                </button>

                <button
                    className="mt-6 w-[500px] h-12 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl text-xl text-white font-semibold"
                    onClick={handleLoginFb}
                >
                    Login with facebook
                </button>
            </div>
        </div>
    );
}
