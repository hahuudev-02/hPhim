import Home from '~/pages/Home';
import NewMovies from '~/pages/NewMovies';
import AnimeMovies from '~/pages/AnimeMovies';
import MovieDeitails from '~/pages/MoiveDeitail';
import NotFound from '~/pages/NotFound';

export const publicRouter = [
    { path: '/', component: Home },
    { path: '/the-loai/phim-moi', component: NewMovies },
    { path: '/the-loai/phim-le', component: NewMovies },
    { path: '/the-loai/phim-hoat-hinh', component: AnimeMovies },
    { path: '/phim', component: MovieDeitails },
    { path: '*', component: NotFound },
];
