import Home from '~/pages/Home';
import AnimeMovies from '~/pages/AnimeMovies';
import MovieDeitails from '~/pages/MovieDeitails';
import WatchMovies from '~/pages/WatchMovies';
import NotFound from '~/pages/NotFound';
import Search from '~/pages/Search';
import Login from '~/pages/Login';
import Upload from 'pages/Upload';

export const routes = {
    home: '/',
    search: '/search',
    login: '/login',
    upload: '/upload',
};

export const publicRouter = [
    { path: routes.home, component: Home },
    { path: routes.search, component: Search },
    { path: '/', component: Home },
    { path: '/the-loai/phim-le', component: AnimeMovies },
    { path: '/the-loai/phim-hoat-hinh', component: AnimeMovies },
    { path: '/phim/:slug', component: MovieDeitails, searchLayout: false },
    { path: '/p/:slug', component: WatchMovies, searchLayout: false },
    { path: '/login', component: Login, layout: false },
    { path: '*', component: NotFound },
];

export const privateRouters = [
    { path: '/upload', component: Upload, layout: false },
    { path: '/profile', component: Upload, layout: false },
];



export default function Routes(user) {
    if(!user) {
        privateRouters.forEach(({ path, component }) => {
            for(const route in routes) {
                if(path == routes[route] ) {
                    routes[route] = '/'
                }
            }
        });
        return routes
    } else {
        return routes
    }
}

