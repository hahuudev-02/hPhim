import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tippy from '@tippyjs/react/headless';
import { BellOutlined, BarsOutlined, CloudUploadOutlined } from '@ant-design/icons';

import { routes } from '~/routers';
import InfoUser from './InfoUser';
import Notify from './Notify';
import icon from '~/api/image/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
    const [activeNotify, setActiveNotify] = useState(false);
    const [activeInfoUser, setActiveInfoUser] = useState(false);

    const user = useSelector((state) => state.auth.Userlogin?.currentUser);

    const navbar = useRef();

    const notify = () => toast('Chức năng chưa phát triển!');

    const handleNavBar = () => {
        navbar.current.classList.toggle('hidden');
    };

    return (
        <header className="header h-[60px] md:h-[80px] bg-headerBg z-[99] px-4 lg:px-2">
            <div className="max-w-screen h-full mx-auto flex-between space-x-4 relative">
                <div className="w-[180px] lg:w-[280px]">
                    <Link to="/" className="navbar-logo hidden md:block">
                        <img src={icon} width="120" className="mt-3" />
                    </Link>

                    <BarsOutlined className="text-2xl text-white md:hidden" onClick={handleNavBar} />
                </div>

                <nav className="navbar-menu hidden" ref={navbar}>
                    <ul className="navbar-list">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                                }
                            >
                                Phim mới
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/the-loai/phim-le"
                                className={({ isActive }) =>
                                    isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                                }
                            >
                                Phim lẻ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/the-loai/phim-han-quoc"
                                className={({ isActive }) =>
                                    isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                                }
                            >
                                Phim hàn quốc
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/the-loai/phim-anime"
                                className={({ isActive }) =>
                                    isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
                                }
                            >
                                Phim Anime
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="navbar-actions w-[160px] ">
                    {!user ? (
                        <div className="w-full flex-between">
                            <Tippy
                                render={(attrs) => (
                                    <div className="bg-white rounded-lg z-10 py-1.5 px-3" tabIndex="-1" {...attrs}>
                                        Uploat phim
                                    </div>
                                )}
                            >
                                <Link to={routes.upload}>
                                    <CloudUploadOutlined className="text-white text-2xl" />
                                </Link>
                            </Tippy>

                            <div className="bg-red-500 w-28 h-9 rounded-[60px] flex-center">
                                <Link to="/login" className="mb-0.5 text-white font-semibold text-base">
                                    Đăng nhập
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <div className="upload">
                                <Tippy
                                    render={(attrs) => (
                                        <div className="bg-white rounded-lg z-10 py-1.5 px-3" tabIndex="-1" {...attrs}>
                                            Uploat phim
                                        </div>
                                    )}
                                >
                                    <Link to={routes.upload}>
                                        <CloudUploadOutlined className="text-white text-2xl" />
                                    </Link>
                                </Tippy>
                            </div>
                            <div className="notfy ">
                                <Tippy
                                    visible={false}
                                    interactive
                                    zIndex={99}
                                    onClickOutside={() => setActiveNotify(false)}
                                    render={(attrs) => (
                                        <div className="bg-red-500 w-[520px] h-[500px]" tabIndex="-1" {...attrs}>
                                            My tippy box hi
                                        </div>
                                    )}
                                >
                                    <div className="" onClick={() => setActiveNotify(!activeNotify)} onClick={notify}>
                                        <BellOutlined className="text-2xl text-white cursor-pointer" />
                                    </div>
                                </Tippy>
                            </div>

                            <div className="infor">
                                <Tippy
                                    visible={activeInfoUser}
                                    interactive
                                    zIndex={99}
                                    onClickOutside={() => setActiveInfoUser(false)}
                                    render={(attrs) => (
                                        <div
                                            className="bg-white shadow-lg rounded-md w-[240px] max-h-[500px]"
                                            tabIndex="-1"
                                            {...attrs}
                                        >
                                            <InfoUser user={user} />
                                        </div>
                                    )}
                                >
                                    <img
                                        src={user.img_user}
                                        alt=""
                                        className="w-11 h-11 rounded-full"
                                        onClick={() => setActiveInfoUser(!activeInfoUser)}
                                    />
                                </Tippy>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
