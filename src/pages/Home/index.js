import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SliderMovies from './Slider';
import MovieItem from '~/components/MovieItem';
import { getFullMovies } from '~/api/axios/moviesApi';

export default function Home() {
    const movies = useSelector((state) => state.movies.getfullMovies.currentMovies);
    const isLoading = useSelector((state) => state.movies.getfullMovies.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        getFullMovies(dispatch);
    }, []);
    return (
        <div className="">
            <div className="slider">
                <SliderMovies />
            </div>

            <div className="">
                <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim mới cập nhật</h2>
                {isLoading ? (
                    <span className="text-white">Loading...</span>
                ) : (
                    <span className="text-white">Loading stop</span>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {movies?.map((movie) => (
                        <MovieItem key={movie._id} props={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}
