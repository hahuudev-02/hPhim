import Movies from 'pages/Movies';
import Admin from '~/pages/Admin';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import MovieDeitails from '~/pages/MovieDeitails';
import NotFound from '~/pages/NotFound';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Update from '~/pages/Update';
import Upload from '~/pages/Upload';
import WatchMovies from '~/pages/WatchMovies';

export const routes = {
    home: '/',
    search: '/search',
    login: '/login',
    upload: '/upload',
};

export const publicRouters = [
    { path: routes.home, component: Home },
    { path: routes.search, component: Search },
    { path: '/the-loai/:slug', component: Movies },

    { path: '/phim/:slug', component: MovieDeitails, searchLayout: false },
    { path: '/p/:slug', component: WatchMovies, searchLayout: false },
    { path: routes.login, component: Login, layout: false },
    { path: '*', component: NotFound },
];

export const privateRouters = [
    { path: '/upload', component: Upload, searchLayout: false },
    { path: '/update/:slug', component: Update, searchLayout: false },
    { path: '/profile/:id', component: Profile, layout: false },
];

export const adminRouters = [{ path: '/admin/:id', component: Admin, searchLayout: false }];

export { default as AdminRoute } from './AdminRoute';
export { default as ProtecredRoute } from './ProtecredRoute';
