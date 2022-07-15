import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import { BellOutlined, BarsOutlined, CloudUploadOutlined } from '@ant-design/icons';
import Notify from './Notify';

export default function Header() {
    const [activeNotify, setActiveNotify] = useState(false);
    // const [activeNavbar, setActiveNotify] = useState(true);

    const navbar = useRef();
    const handleNavBar = () => {
        navbar.current.classList.toggle('hidden');
    };

    return (
        <header className="header h-[60px] md:h-[80px] bg-headerBg z-[99]">
            <div className="max-w-screen h-full mx-auto flex-between space-x-4 relative">
                <div className="w-[180px] lg:w-[280px]">
                    <Link to="/" className="navbar-logo hidden md:block">
                        <img src="https://i.imgur.com/GvLWtFD.png" />
                    </Link>

                    <BarsOutlined className="text-2xl text-white md:hidden" onClick={handleNavBar} />
                </div>

                <nav className="navbar-menu hidden" ref={navbar}>
                    <ul className="navbar-list">
                        <li>
                            <Link to="/" className="navbar-link">
                                Phim mới
                            </Link>
                        </li>
                        <li>
                            <Link to="/the-loai/phim-le" className="navbar-link">
                                Phim lẻ
                            </Link>
                        </li>
                        <li>
                            <Link to="/the-loai/phim-hoat-hinh" className="navbar-link">
                                Phim hoạt hình
                            </Link>
                        </li>
                        <li>
                            <Link to="/the-loai/phim-chieu-rap" className="navbar-link">
                                Phim chiếu rạp
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="navbar-actions w-[160px] ">
                    {/* <div className="bg-red-500 w-32 h-9 rounded-[60px] flex-center">
                        <Link to="/login" className="mb-0.5 text-white font-semibold text-base">
                            Đăng nhập
                        </Link>
                    </div> */}
                    <div className="flex items-center justify-between">
                        <div className="upload">
                            <Tippy
                                render={(attrs) => (
                                    <div className="bg-white rounded-lg z-10 py-1.5 px-3" tabIndex="-1" {...attrs}>
                                        Uploat phim
                                    </div>
                                )}
                            >
                                <Link to="/uploat">
                                    <CloudUploadOutlined className="text-white text-2xl" />
                                </Link>
                            </Tippy>
                        </div>
                        <div className="notfy ">
                            <Tippy
                                visible={activeNotify}
                                interactive
                                zIndex={99}
                                render={(attrs) => (
                                    <div className="bg-red-500 w-[520px] h-[500px]" tabIndex="-1" {...attrs}>
                                        My tippy box
                                    </div>
                                )}
                            >
                                <div className="" onClick={() => setActiveNotify(!activeNotify)}>
                                    <BellOutlined className="text-2xl text-white" />
                                </div>
                            </Tippy>
                        </div>

                        <div className="infor">
                            <img
                                src="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                alt=""
                                className="w-11 h-11 rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
