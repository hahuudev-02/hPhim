import React from 'react';
import Header from './Header';
import SearchInput from '../../components/SearchInput';

export default function DefaultLayout({ searchLayout = true, children }) {
    return (
        <div className="px-2 md:px-4 lg:px-0 w-[100vw]">
            <Header />
            <div className="max-w-screen mx-auto mt-6 h-[1500px]">
                <div className="serach px-8 md:px-10 lg:px-32">
                    {searchLayout && <SearchInput />}
                </div>
                    
                <div className="page mt-10">{children}</div>
            </div>
        </div>
    );
}