import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import Loading from '~/components/Loading';
import MovieItem from '~/components/MovieItem';
import { getFullMovies, getAmoutMovie } from '~/api/axios/moviesApi';
import Paging from '~/components/Paging';
import { generateSlug } from 'utilities/sortCategory';

export default function Movies() {
    const movies = useSelector((state) => state.movies.getfullMovies.currentMovies);
    const isLoading = useSelector((state) => state.movies.getfullMovies.isLoading);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { slug } = useParams();

    useEffect(() => {
        getFullMovies({ dispatch, genre: generateSlug(slug), page: searchParams.get('page'), limit: 6 });
    }, [searchParams, dispatch, slug]);

    useEffect(() => {
        getAmoutMovie({ dispatch, genre: generateSlug(slug) });
    }, [dispatch, slug]);
    return (
        <div className="">
            <div className="">
                <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim lẻ hay nhất</h2>
                {isLoading ? (
                    <div className="min-h-[300px]">
                        <Loading />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                        {movies?.map((movie) => (
                            <MovieItem key={movie._id} props={movie} />
                        ))}
                    </div>
                )}
            </div>

            <div className="mt-10 flex-center">
                <Paging currentItems={6} />
            </div>
        </div>
    );
}
