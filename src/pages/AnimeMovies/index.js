import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loading from '~/components/Loading';
import MovieItem from '~/components/MovieItem';
import { getFullMovies, getAmoutMovie } from '~/api/axios/moviesApi';
import Paging from '~/components/Paging';
import { useSearchParams } from 'react-router-dom';

export default function AnimeMovies() {
    const movies = useSelector((state) => state.movies.getfullMovies.currentMovies);
    const isLoading = useSelector((state) => state.movies.getfullMovies.isLoading);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        getFullMovies({ dispatch, genre: 'anime', page: searchParams.get('page')});
    }, [searchParams.get('page')]);

    useEffect(() => {
        getAmoutMovie({dispatch, genre: 'phq'});
    }, []);
    return (
        <div className="">
            <div className="">
                <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim ANIME hay nhất</h2>
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

            <div className="paging">
                <Paging />
            </div>
        </div>
    );
}
