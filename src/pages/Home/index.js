import React from 'react';
import MovieItem from '~/components/MovieItem';
import { initdata } from '~/api/initdata';
console.log(initdata.newmovies.movies);
export default function Home() {
    return (
        <div className="">
            <h2 className="uppercase text-4xl font-bold text-[#f1b722] my-8">Phim mới cập nhật</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {initdata.newmovies.movies.map((movie) => (
                    <MovieItem key={movie.id} props={movie}/>
                ))}
            </div>
        </div>
    );
}
