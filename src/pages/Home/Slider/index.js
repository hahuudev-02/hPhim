import React, { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderMovies() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim Hot nhất tháng bảy</h2>
            <Slider {...settings} className="max-w-full mx-10">
                {/*  */}
                <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-3xl shadow-md">
                    <div className="flex">
                        <div className="flex-1">
                            <h3>Hẹn Hò chốn công sở</h3>
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
