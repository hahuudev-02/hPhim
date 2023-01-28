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
           
            <div className="w-[600px] py-4 bg-red-200 flex flex-col justify-center items-center rounded-3xl shadow-2xl">
                <h2 className='mb-8 text-2xl text-[#057655] font-semibold'>ĐĂNG NHẬP VÀO WEB MOVIE HAHUU</h2>
                <button
                    className="w-[500px] h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl text-xl text-white font-semibold"
                    onClick={handleLoginGG}
                >
                    Login with google
                </button>

                <button
                    className="mt-4 w-[500px] h-12 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl text-xl text-white font-semibold"
                    onClick={handleLoginFb}
                >
                    Login with facebook
                </button>
            </div>
        </div>
    );
}
