import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchInput from '../../components/SearchInput';
import { useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function DefaultLayout({ searchLayout = true, layout = true, children }) {
    const location = useLocation();
    const isLoading = useSelector((state) => state.movies?.uploatMovie.isLoading);
    if (isLoading) {
        toast('Wow so easy!');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    return (
        <div className="relative">
            {layout ? (
                <>
                    <Header />
                    <div className="max-w-screen mx-auto mt-6 mb-10  px-4 md:px-4 lg:px-2">
                        <div className="serach max-w-wSearchSm md:max-w-wSearchMd lg:max-w-wSearchLg mx-auto">
                            {searchLayout && <SearchInput />}
                        </div>

                        <div className="page mt-10">{children}</div>
                    </div>
                    <Footer />
                </>
            ) : (
                <>{children}</>
            )}
            <ToastContainer />
        </div>
    );
}
