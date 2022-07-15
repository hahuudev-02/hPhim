import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchInput from '../../components/SearchInput';

export default function DefaultLayout({ searchLayout = true, children }) {
    return (
        <div className="px-2 md:px-4 lg:px-0 w-[100vw] relative">
            <Header />
            <div className="max-w-screen mx-auto mt-6 mb-24">
                <div className="serach max-w-wSearchSm md:max-w-wSearchMd lg:max-w-wSearchLg mx-auto">
                    {searchLayout && <SearchInput />}
                </div>
                    
                <div className="page mt-10">{children}</div>
            </div>
            <Footer />
        </div>
    );
}
