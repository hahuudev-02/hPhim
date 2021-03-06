import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SliderMovies from './Slider';
import Loading from '~/components/Loading';
import MovieItem from '~/components/MovieItem';
import { getFullMovies } from '~/api/axios/moviesApi';
import Paging from '~/components/Paging';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const notify = () => toast('Wow so easy!');

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
            <div>
                <button onClick={notify} className="text-white">
                    Notify!
                </button>
                <ToastContainer />
            </div>
        </div>
    );
}
