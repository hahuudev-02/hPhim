import Home from '~/pages/Home';
import AnimeMovies from '~/pages/AnimeMovies';
import MovieDeitails from '~/pages/MovieDeitails';
import WatchMovies from '~/pages/WatchMovies';
import NotFound from '~/pages/NotFound';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import KoreaMovie from '~/pages/KoreaMovies';
import OddMovie from '~/pages/OddMovie';
import Admin from 'pages/Admin';
import Update from 'pages/Update';

export const routes = {
    home: '/',
    search: '/search',
    login: '/login',
    upload: '/upload',
};

export const publicRouters = [
    { path: routes.home, component: Home },
    { path: routes.search, component: Search },
    { path: '/the-loai/phim-le', component: OddMovie },
    { path: '/the-loai/phim-han-quoc', component: KoreaMovie },
    { path: '/the-loai/phim-anime', component: AnimeMovies },
    { path: '/phim/:slug', component: MovieDeitails, searchLayout: false },
    { path: '/p/:slug', component: WatchMovies, searchLayout: false },
    { path: routes.login, component: Login, layout: false },
    { path: '*', component: NotFound },
];

export const privateRouters = [
    { path: '/upload', component: Upload, searchLayout: false },
    { path: '/update/:id', component: Update, searchLayout: false },
    { path: '/profile/:id', component: Profile, layout: false },
    { path: '/admin/:id', component: Admin, searchLayout: false },
];

// export const privateRouters = [
//     { path: '/upload', component: Upload, searchLayout: false },
// ];



export {default as ProtecredRoute} from './ProtecredRoute'

