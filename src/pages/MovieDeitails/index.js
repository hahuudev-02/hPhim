import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieBySlug } from '~/api/axios/moviesApi';

import { TagOutlined } from '@ant-design/icons';
import Loading from '~/components/Loading';

function MovieDeitails() {
    const params = useParams();
    const dispatch = useDispatch();
    const movieItem = useSelector((state) => state.movies.getMovieBySlug.currentMovies);
    const isLoading = useSelector((state) => state.movies.getMovieBySlug.isLoading);
    useEffect(() => {
        getMovieBySlug(params.slug, dispatch);
    }, [params.slug]);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <header className="grid grid-cols-[1.2fr,2fr] gap-6">
                        <img src={movieItem?.img_p} alt="" className="" />
                        <div className="info">
                            <h3 className="text-2xl text-white font-bold">{movieItem?.name}</h3>
                            <Link to="/" className="text-white flex items-center my-4">
                                <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                                Phim tình cảm
                            </Link>

                            <div className="flex">
                                <Link to="/" className="btn-trailer">
                                    Trailer
                                </Link>
                                <Link to={`/p/${movieItem?.slug}-tap-1`} className="btn-play-movie">
                                    Xem Phim
                                </Link>
                            </div>
                        </div>
                    </header>

                    <div className="conten mt-5 text-white text-lg">{movieItem?.content}</div>
                </>
            )}
        </div>
    );
}

export default MovieDeitails;
