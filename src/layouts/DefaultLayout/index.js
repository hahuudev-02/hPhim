import React from 'react';
import Header from './Header';
import Search from './Search';

export default function DefaultLayout({ path, children }) {

    return (
        <div className="px-2 md:px-4 lg:px-0">
            <Header />
            <div className="max-w-screen mx-auto mt-6 h-[1000px]">
                {path!= '/phim' && <Search />}
                <div className="page">{children}</div>
            </div>
        </div>
    );
}
