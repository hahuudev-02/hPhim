import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { initdata } from '~/api/initdata';
import { TagOutlined } from '@ant-design/icons';
import { getMovies } from 'api/axios/moviesApi';

function MovieDeitails() {
    const [movieItem, setMovieItem] = useState({});
    const params = useParams();

    useEffect(() => {
        async function fechApi() {
            const res = await getMovies(params.slug);
            setMovieItem(res.data);
        }

        fechApi();
    }, [params.slug]);

    // const movieItem = initdata.newmovies.movies.find(movie => movie.slug == params.slug)

    return (
        <div>
            <header className="grid grid-cols-[1.2fr,2fr] gap-6">
                <img src={movieItem.img_p} alt="" className="" />
                <div className="info">
                    <h3 className="text-2xl text-white font-bold">{movieItem.name}</h3>
                    <Link to="/" className="text-white flex items-center my-4">
                        <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                        Phim tình cảm
                    </Link>

                    <div className="flex">
                        <Link
                            to="/"
                            className="inline-block h-11 w-20 bg-[#3898ec] text-center leading-10 rounded-md text-white"
                        >
                            Trailer
                        </Link>
                        <Link
                            to={`/p/${movieItem.slug}-tap-1`}
                            className="h-11 w-28 bg-red-400 ml-4 text-center leading-10 rounded-md text-white"
                        >
                            Xem Phim
                        </Link>
                    </div>
                </div>
            </header>

            <div className="conten"></div>
        </div>
    );
}

export default MovieDeitails;
