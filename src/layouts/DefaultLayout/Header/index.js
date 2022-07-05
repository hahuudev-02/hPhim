import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header h-[80px] bg-headerBg">
            <div className="max-w-[1200px] h-full mx-auto flex-between">
                <Link to="/" className="navbar-logo">
                    <img src="https://i.imgur.com/GvLWtFD.png" />
                </Link>

                <nav className="navbar-list flex space-x-4">
                    <Link to="/" className="navbar-link">
                        Phim mới
                    </Link>

                    <Link to="/the-loai/phim-bo" className="navbar-link">
                        Phim bộ
                    </Link>

                    <Link to="/the-loai/phim-le" className="navbar-link">
                        Phim lẻ
                    </Link>

                    <Link to="/the-loai/phim-hoat-hinh" className="navbar-link">
                        Phim hoạt hình
                    </Link>

                    <Link to="/the-loai/phim-chieu-rap" className="navbar-link">
                        Phim chiếu rạp
                    </Link>
                </nav>
            </div>
        </header>
    );
}
