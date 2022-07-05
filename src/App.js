import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/routers';
import DefaultLayout from '~/layouts/DefaultLayout';

function App() {
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
                                <Layout path={rotuer.path}>
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
