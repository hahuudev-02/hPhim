import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { getMovieBySlug } from '~/api/axios/moviesApi';

import { initdata } from '~/api/initdata';
import SideBar from './SideBar';
import { TagOutlined } from '@ant-design/icons';

export default function WatchMovies() {
    const movieItem = useSelector((state) => state.movies.getMovieBySlug.currentMovies);
    // const [movieItem, setMovieItem] = useState({});
    const [movieChap, setMovieChap] = useState({});

    const params = useParams();
    // Cắt chuỗi :slug
    const indexOf = params.slug.indexOf('tap');
    const slugMovie = params.slug.substring(0, indexOf - 1);
    const slugChap = params.slug.substring(indexOf).replace('-', ' ');
    //

    useEffect(() => {
        async function fechApi() {
            
            const movieChaps = await movieItem.chapMp4s.find((chapMp4) => chapMp4.chapter == slugChap);
            setMovieChap(movieChaps);
        }

        fechApi();
    }, [slugChap]);

    return (
        <div className="">
            <div className="grid grid-cols-[1.2fr,2fr] gap-6">
                <div className="flex justify-center">
                    <img src={movieItem.img_p} alt="" className="max-w-[340px] rounded-xl" />
                </div>
                <div className="info">
                    <h3 className="text-2xl text-white font-bold">{movieItem.name}</h3>
                    <Link to="/" className="text-white flex items-center my-4">
                        <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                        Phim tình cảm
                    </Link>
                </div>
            </div>

            <div className="watch-movie mt-20 grid grid-cols-[1fr,320px] gap-6">
                {/* Movie */}
                <div className="">
                    {/* Video  */}
                    <div className="relative pt-[56.25%] rounded-xl border border-headerBg">
                        <ReactPlayer
                            url={movieChap?.mp4Link}
                            playing={false}
                            controls={true}
                            width="100%"
                            height="100%"
                            className="absolute top-0 left-0 rounded-xl"
                            // origin="localhost:3000"
                        />
                    </div>
                    <div className="watch-movie-chap my-6 ">
                        <span className="text-2xl text-[#9CABB6]">CHỌN TẬP PHIM</span>
                        <div className="flex flex-wrap">
                            {movieItem.chapMp4s?.map((chapMp4, index) => (
                                <Link
                                    to={`/p/${movieItem.slug}-tap-${index + 1}`}
                                    key={chapMp4._id}
                                    className="w-8 h-8 mr-4 mt-4 rounded-full bg-red-500 text-white text-center leading-7"
                                >
                                    {index + 1}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="h-14 w-full bg-yellow-500">Chiếu độc quyền trên website Hà Hữu</div>
                </div>

                {/* SideBar */}
                <div className="side-bar w-full bg-red-300 relative overflow-hidden h-[399px]">
                    <SideBar />
                </div>
            </div>

            <div className="">hiii</div>
        </div>
    );
}
