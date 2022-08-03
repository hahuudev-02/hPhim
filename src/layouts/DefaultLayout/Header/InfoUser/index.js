import React, { memo } from 'react';
import PropTy3es from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '~/api/firebase/login.js';

function InfoUser({ user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        logout(dispatch, navigate);
    };
    const nickNameUser = user.displayName
        .replaceAll(' ', '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
    return (
        <div className="p-3">
            <div className="flex">
                <img src={user.photoURL} alt="" className="w-14 h-14 rounded-full" />
                <div className="ml-3 flex flex-col">
                    <span className="font-semibold text-xl">{user.displayName}</span>
                    <span className="text-info-color break-all">@{nickNameUser}</span>
                </div>
            </div>

            <ul className="mt-4 pl-2 border border-transparent border-t-dark-gray ">
                <li className="">
                    <Link to="/admin/@hahuu" className="pt-3 text-info-color font-normal hover:text-[#666]">
                        Admin
                    </Link>
                </li>
            </ul>

            <ul className="mt-3 pl-2 border border-transparent border-t-dark-gray ">
                <li className="">
                    <Link to={`/profile/@${nickNameUser}`} className="pt-3 font-normal text-info-color hover:text-[#666]">
                        Trang cá nhân
                    </Link>
                </li>
            </ul>

            <ul className="mt-3 pl-2 border border-transparent border-t-dark-gray ">
                <li>
                    <Link to="" className="pt-3 text-info-color font-normal hover:text-[#666]">
                        Đăng phim
                    </Link>
                </li>
                <li>
                    <Link to="" className="pt-3 text-info-color font-normal hover:text-[#666]">
                        Phim của tôi
                    </Link>
                </li>
            </ul>
            <ul className="mt-3 pl-2 border border-transparent border-t-dark-gray ">
                <li>
                    <Link to="" className="pt-3 text-info-color font-normal hover:text-[#666]">
                        Cài đặt
                    </Link>
                </li>
                <li>
                    <button className="pt-3 text-info-color font-normal hover:text-[#666]" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    );
}

InfoUser.propTy3es = {
    user: PropTy3es.object.isRequired,
};

export default InfoUser;
