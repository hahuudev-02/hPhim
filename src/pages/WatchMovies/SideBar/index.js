import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '~/components/SearchInput';
import { useSelector } from 'react-redux';
import MovieItem from 'components/MovieItem';

function SideBar() {
    const movies = useSelector((state) => state.movies.getfullMovies?.currentMovies);
    console.log(movies);
    return (
        <div className="h-full overflow-y-scroll">
            <SearchInput width={90} placeholder="Search" />

            <div className="p-2 space-y-3">
                {movies?.map((movie) => (
                    <MovieItem key={movie._id} props={movie} />
                ))}
                {movies?.map((movie) => (
                    <MovieItem key={movie._id} props={movie} />
                ))}
            </div>
        </div>
    );
}

SideBar.propTypes = {};

export default SideBar;
