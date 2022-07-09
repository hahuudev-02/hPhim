import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { CloseOutlined, SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function SearchInput({ width, placeholder }) {
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchInputElement = useRef();

    useEffect(() => {
        if (!searchValue.trim()) return;

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [searchValue]);

    return (
        <div className="relative w-full ">
            <div className="flex h-10 ">
                <div className="flex-1 flex relative">
                    <input
                        type="text"
                        ref={searchInputElement}
                        className="w-full rounded-l-md pl-4"
                        placeholder={placeholder || 'Bạn muốn tìm phim gì ?'}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    {searchValue && (
                        <CloseOutlined
                            onClick={() => {
                                setSearchValue('');
                                searchInputElement.current.focus();
                            }}
                            className="absolute right-3 top-2/4 translate-y-[-50%] cursor-pointer"
                        />
                    )}
                </div>
                <button className={`h-full w-[160px] bg-[#3898ec] text-white font-semibold rounded-r-md`}>
                    Tìm kiếm
                </button>
            </div>

            {searchValue && (
                <div className="serach-result absolute inset-x-0 top-12 rounded-lg shadow-sm bg-white">
                    <div className="p-4 text-[#4B0082] font-bold">
                        <div className="h-9 flex items-center shadow-sm">
                            <div className="relative flex-1 h-full flex items-center text-lg">
                                <i className="h-full w-10">
                                    {!loading && <SearchOutlined className="mr-2 text-xl mb-1" />}
                                    {loading && <LoadingOutlined className="absolute text-xl  top-0 left-0" />}
                                </i>
                                Kết quả cho {searchValue}
                            </div>

                            <Link to="" className="w-20">
                                Xem thêm
                            </Link>
                        </div>

                        <ul className="max-h-[420px] overflow-y-auto mt-2">
                            <li className="h-12 mb-1.5 hover:bg-red-200 rounded-xl">
                                <Link to="#" className="ml-2 h-full flex items-center p-0.5">
                                    <img
                                        src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/62b2b0e3fb9acdd196886284_poster-nu-luat-su-ky-la-woo-young-woo.jpeg"
                                        alt=""
                                        className="h-full rounded-sm"
                                    />
                                    <p className="ml-4 text-[#8B008B] font-semibold">Hẹn hò chốn công sở</p>
                                </Link>
                            </li>
                            <li className="h-12 mb-1.5 hover:bg-red-200 rounded-xl">
                                <Link to="#" className="ml-2 h-full flex items-center p-0.5">
                                    <img
                                        src="https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/62b2b0e3fb9acdd196886284_poster-nu-luat-su-ky-la-woo-young-woo.jpeg"
                                        alt=""
                                        className="h-full rounded-sm"
                                    />
                                    <p className="ml-4 text-[#8B008B] font-semibold">Hẹn hò chốn công sở</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

SearchInput.propTypes = {
    width: PropTypes.number,
    placeholder: PropTypes.string,
};

export default SearchInput;
