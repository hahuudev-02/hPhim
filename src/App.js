import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouters, privateRouters, ProtecredRoute } from '~/routers';
import DefaultLayout from '~/layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <Routes>
                {publicRouters.map((router) => {
                    const Layout = DefaultLayout;
                    const Page = router.component;
                    return (
                        <Route
                            key={router.path}
                            path={router.path}
                            element={
                                <Layout searchLayout={router.searchLayout} layout={router.layout}>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                <Route element={<ProtecredRoute/>}>
                    {privateRouters.map((router) => {
                        const Layout = DefaultLayout;
                        const Page = router.component;

                        return (
                            <Route
                                key={router.path}
                                path={router.path}
                                element={
                                    <Layout searchLayout={router.searchLayout} layout={router.layout}>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
