import Home from '~/pages/Home';
import NewMovies from '~/pages/NewMovies';
import AnimeMovies from '~/pages/AnimeMovies';
import MovieDeitails from '~/pages/MovieDeitails';
import WatchMovies from '~/pages/WatchMovies';
import NotFound from '~/pages/NotFound';

export const publicRouter = [
    { path: '/', component: Home },
    { path: '/the-loai/phim-moi', component: NewMovies },
    { path: '/the-loai/phim-le', component: NewMovies },
    { path: '/the-loai/phim-hoat-hinh', component: AnimeMovies },
    { path: '/phim/:slug', component: MovieDeitails, searchLayout: false },
    { path: '/p/:slug', component: WatchMovies, searchLayout: false },
    { path: '*', component: NotFound },
];
