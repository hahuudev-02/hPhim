import Home from '~/pages/Home';
import AnimeMovies from '~/pages/AnimeMovies';
import MovieDeitails from '~/pages/MovieDeitails';
import WatchMovies from '~/pages/WatchMovies';
import NotFound from '~/pages/NotFound';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';

export const routes = {
    home: '/',
    search: '/search',
    login: '/login',
    upload: '/upload',
};

export const publicRouters = [
    { path: routes.home, component: Home },
    { path: routes.search, component: Search },
    // { path: '/?page=1', component: Home },
    { path: '/the-loai/phim-le', component: AnimeMovies },
    { path: '/the-loai/phim-hoat-hinh', component: AnimeMovies },
    { path: '/phim/:slug', component: MovieDeitails, searchLayout: false },
    { path: '/p/:slug', component: WatchMovies, searchLayout: false },
    { path: '/login', component: Login, layout: false },
    { path: '*', component: NotFound },
];

export const privateRouters = [
    { path: '/upload', component: Upload, searchLayout: false },
    { path: '/profile/:id', component: Profile, layout: false },
];



export {default as ProtecredRoute} from './ProtecredRoute'

