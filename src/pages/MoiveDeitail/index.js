import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TagOutlined } from '@ant-design/icons';

function MovieDeitails(props) {
    return (
        <div>
            <header className="grid grid-cols-[1.2fr,2fr] gap-6">
                <img
                    src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/62b2b0e3fb9acdd196886284_poster-nu-luat-su-ky-la-woo-young-woo.jpeg"
                    alt=""
                    className=""
                />
                <div className="info">
                    <h3 className="text-2xl text-white font-bold">HẸN HÒ CHỐN CÔNG SỞ</h3>
                    <Link to="/" className="text-white flex items-center my-4">
                        <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                        Phim tình cảm
                    </Link>

                    <div className="flex">
                        <Link to="/" className="inline-block h-11 w-20 bg-[#3898ec] text-center leading-10 rounded-md text-white">Trailer</Link>
                        <Link to="/" className="h-11 w-28 bg-red-400 ml-4 text-center leading-10 rounded-md text-white">Xem Phim</Link>
                    </div>
                </div>
            </header>

            <div className="conten">
            </div>
        </div>
    );
}

MovieDeitails.propTypes = {};

export default MovieDeitails;
