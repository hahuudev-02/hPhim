import React, { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function SliderMovies({ top5Movies }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };
    return (
        <>
            <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim Hot nhất tháng tám</h2>
            <Slider {...settings} className="max-w-full mx-10">
                {top5Movies?.map((movie) => (
                    <div key={movie._id} className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-3 rounded-3xl shadow-md">
                        <div className="flex">
                            <div className="flex-1 mr-2">
                                <h3 className="text-lg text-white uppercase text-center font-semibold">{movie.name}</h3>
                                <p className="text-yellow">
                                    Thể loại: <span className="text-[#ccc]">Phim hàn quốc</span>{' '}
                                </p>
                                <p className="text-yellow">
                                    Tổng số tập: <span className="">{movie.chapMp4s.length}</span>
                                </p>
                                <p className="text-yellow">
                                    Diễn viên chính: <span className="">Hà Hữu</span>
                                </p>
                                <div className="flex">
                                    <Link to="http://" className="btn-trailer">
                                        Xem trailer
                                    </Link>
                                    <Link to={`phim/${movie.slug}`} className="btn-play-movie">
                                        Xem Phim
                                    </Link>
                                </div>
                                <div className="">
                                    <span className="text-yellow">Nội dung: </span>
                                    <p className="inline-block break-words">
                                        {movie.content}
                                    </p>
                                </div>
                            </div>
                            <Link to={`p/${movie.slug}-tap-1`} className="flex-1">
                                <img
                                    src={movie.img_p}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default memo(SliderMovies);
