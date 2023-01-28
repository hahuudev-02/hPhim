import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getMovieBySlug } from '~/api/axios/moviesApi';

import { TagOutlined } from '@ant-design/icons';
import { sortCategory } from 'utilities';
import Loading from '~/components/Loading';

function MovieDeitails() {
    const params = useParams();
    const dispatch = useDispatch();
    const movieItem = useSelector((state) => state.movies.getMovieBySlug.currentMovies);
    const isLoading = useSelector((state) => state.movies.getMovieBySlug.isLoading);
    useEffect(() => {
        getMovieBySlug(params.slug, dispatch);
    }, [params.slug, dispatch]);
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <header className="grid grid-cols-[1.2fr,2fr] gap-6">
                        <img src={movieItem?.img_p} alt="" className="" />
                        <div className="info">
                            <h3 className="text-2xl text-white font-bold">{movieItem?.name}</h3>
                            <Link to={`/the-loai/${sortCategory(movieItem?.genre)?.slugGenre}`} className="text-white flex items-center my-4">
                                <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                                {sortCategory(movieItem?.genre)?.genre}
                            </Link>

                            <div className="flex">
                                <Link to={`/p/${movieItem?.slug}-tap-1`} className="btn-trailer">
                                    Trailer
                                </Link>
                                <Link to={`/p/${movieItem?.slug}-tap-1`} className="btn-play-movie">
                                    Xem Phim
                                </Link>
                            </div>
                        </div>
                    </header>

                    <div className="conten mt-5 text-white text-lg">{movieItem?.content}</div>
                </>
            )}
        </div>
    );
}

export default MovieDeitails;
