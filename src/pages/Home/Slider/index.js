import React, { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function SliderMovies() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim Hot nhất tháng bảy</h2>
            <Slider {...settings} className="max-w-full mx-10">
                {/*  */}
                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded-3xl shadow-md">
                    <div className="flex">
                        <div className="flex-1 mr-2">
                            <h3>Hẹn Hò chốn công sở</h3>
                            <p className="text-yellow">
                                Thể loại: <span className="text-[#ccc]">Phim hàn quốc</span>{' '}
                            </p>
                            <p className="text-yellow">
                                Tổng số tập: <span className="">24</span>
                            </p>
                            <p className="text-yellow">
                                Diễn viên chính: <span className="">Hà Hữu</span>
                            </p>
                            <div className="flex">
                                <Link to="http://" className="btn-trailer">
                                    Xem trailer
                                </Link>
                                <Link to="" className="btn-play-movie">
                                    Xem Phim
                                </Link>
                            </div>
                            <div className="">
                                <span className="text-yellow">Nội dung: </span>
                                <p className="inline-block break-words">
                                    Phim bắt đầu vào tình cảm của sv đạt và n2t Phim bắt đầu vào tình cảm của sv đạt và
                                    Phim bắt đầu vào tình cảm của sv đạt và n2t Phim bắt đầu vào tình cảm của sv đạt và
                                    Phim bắt đầu vào tình cảm của sv đạt và n2t Phim bắt đầu vào tình cảm của sv đạt và
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://img.youtube.com/vi/xWeXophB2sA/maxresdefault.jpg"
                                alt=""
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/*  */}

                <div className="bg-gradient-to-r from-violet-500 to-pink-500 p-2 rounded-3xl">
                    <div className="flex">
                        <div className="flex-1">
                            <h3>Lối nhỏ vào đời</h3>
                        </div>
                        <div className="flex-1 cursor-pointer">
                            <img
                                src="https://img.youtube.com/vi/xWeXophB2sA/maxresdefault.jpg"
                                alt=""
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-violet-500 to-pink-500 p-2 rounded-3xl">
                    <div className="flex">
                        <div className="flex-1">
                            <h3>Hẹn Hò chốn công sở</h3>
                        </div>
                        <div className="flex-1 cursor-pointer">
                            <img
                                src="https://img.youtube.com/vi/xWeXophB2sA/maxresdefault.jpg"
                                alt=""
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
}

export default memo(SliderMovies);
