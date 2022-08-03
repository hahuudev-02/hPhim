import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Loading from '~/components/Loading';
import MovieItem from '~/components/MovieItem';
import { getFullMovies, getAmoutMovie } from '~/api/axios/moviesApi';
import Paging from '~/components/Paging';

export default function OddMovie() {
    const movies = useSelector((state) => state.movies.getfullMovies.currentMovies);
    const isLoading = useSelector((state) => state.movies.getfullMovies.isLoading);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // setSearchParams({ page: '1' }, { replace: true });
        getFullMovies({ dispatch, genre: 'pl', page: searchParams.get('page'), limit: 3 });
    }, [searchParams.get('page')]);

    useEffect(() => {
        getAmoutMovie(dispatch);
    }, []);
    return (
        <div className="">
            <div className="">
                <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim lẻ hay nhất</h2>
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
