import Home from '~/pages/Home';
import AnimeMovies from '~/pages/AnimeMovies';
import MovieDeitails from '~/pages/MovieDeitails';
import WatchMovies from '~/pages/WatchMovies';
import NotFound from '~/pages/NotFound';
import Search from '~/pages/Search';

export const publicRouter = [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/', component: Home },
    { path: '/the-loai/phim-le', component: AnimeMovies },
    { path: '/the-loai/phim-hoat-hinh', component: AnimeMovies },
    { path: '/phim/:slug', component: MovieDeitails, searchLayout: false },
    { path: '/p/:slug', component: WatchMovies, searchLayout: false },
    { path: '*', component: NotFound },
];

export const privateRouters = [];
