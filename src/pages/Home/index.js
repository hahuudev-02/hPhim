import React, { useState, useEffect } from 'react';
import MovieItem from '~/components/MovieItem';
import { initdata } from '~/api/initdata';

import axios from 'axios';

const url = 'localhost:8017/api/newmovies';

export default function Home() {
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:8017/api/movies')
    //         .then(function (res) {
    //             // handle success
    //             setMovies(res.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         });
    // }, []);

    return (
        <div className="">
            <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim mới cập nhật</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {initdata.newmovies.movies.map((movie) => (
                    <MovieItem key={movie.id} props={movie} />
                ))}
            </div>
        </div>
    );
}
