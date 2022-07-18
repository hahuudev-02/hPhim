import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter, privateRouters } from '~/routers';
import DefaultLayout from '~/layouts/DefaultLayout';

function App() {

 

    // useEffect(() => {
    //     document.title = 'hii'
    // }, [])

    return (
        <Router>
            <Routes>
                {publicRouter.map((rotuer) => {
                    const Layout = DefaultLayout;
                    const Page = rotuer.component;
                    return (
                        <Route
                            key={rotuer.path}
                            path={rotuer.path}
                            element={
                                <Layout searchLayout={rotuer.searchLayout} layout={rotuer.layout}>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
