import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginWithGG, loginWithFb, logout } from '~/api/firebase/login.js';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginGG = () => {
        loginWithGG(dispatch, navigate);
    };
    const handleLoginFb = () => {
        loginWithFb(dispatch, navigate);
        
    }

    return (
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
