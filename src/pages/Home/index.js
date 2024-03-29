import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SliderMovies from './Slider';
import Loading from '~/components/Loading';
import MovieItem from '~/components/MovieItem';
import { getFullMovies, getAmoutMovie } from '~/api/axios/moviesApi';

import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const movies = useSelector((state) => state.movies.getfullMovies?.currentMovies);
    const isLoading = useSelector((state) => state.movies.getfullMovies?.isLoading);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getFullMovies({ dispatch, page: searchParams.get('page') });
    }, [dispatch, searchParams]);

    useEffect(() => {
        getAmoutMovie(dispatch);
    }, [dispatch]);

    const top5Movies = movies?.slice(0, 5);
    return (
        <div className="">
            <div className="slider min-h-[300px]">
                <SliderMovies top5Movies={top5Movies} />
            </div>

            <div className="min-h-[300px]">
                <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim mới cập nhật</h2>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {movies?.map((movie) => (
                            <MovieItem key={movie._id} props={movie} />
                        ))}
                    </div>
                )}
            </div>

            {/* <div>
                <button onClick={notify} className="text-white">
                    Notify!
                </button>
                <ToastContainer />
            </div> */}
        </div>
    );
}
