import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import searchApi from '~/api/axios/searchApi';
import { useDebounce } from '~/hooks';

import { CloseOutlined, SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function SearchInput({ width, placeholder }) {
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [activeResult, setActiveResult] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    const searchInputElement = useRef();
    const searchEl = useRef();
    const debounce = useDebounce(searchValue, 600);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResults([]);
            return;
        }

        const fechApi = async () => {
            setLoading(true);
            const res = await searchApi(debounce);
            setSearchResults(res.data);
            setLoading(false);
        };

        fechApi();
    }, [debounce]);

    useEffect(() => {
        function handleClick(e) {
            if (searchEl.current.contains(e.target)) {
                setActiveResult(true);
            } else {
                setActiveResult(false);
            }
        }
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="relative w-full " ref={searchEl}>
            <Tippy
                visible={searchValue && activeResult}
                interactive
                placement="bottom"
                zIndex={99}
                render={(attrs) => (
                    <div
                        className="serach-result w-wSearchSm md:w-wSearchMd lg:w-wSearchLg mx-auto bg-white rounded-xl"
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className="p-4 text-[#4B0082] font-bold">
                            <div className="h-9 flex items-center shadow-sm">
                                <div className="relative flex-1 h-full flex items-center text-lg">
                                    <i className="h-full w-10">
                                        {!loading && <SearchOutlined className="mr-2 text-xl mb-1" />}
                                        {loading && <LoadingOutlined className="absolute text-xl  top-0 left-0" />}
                                    </i>
                                    Kết quả cho {searchValue}
                                </div>

                                <Link to={`/search?q=${debounce}`} className="w-20 hover:text-desc-color">
                                    Xem thêm
                                </Link>
                            </div>

                            <ul className="max-h-[420px] overflow-y-auto mt-2">
                                {debounce && !loading && searchResults.length === 0 ? (
                                    <li className="h-12 mb-1.5 hover:bg-red-200 rounded-xl">
                                        Không có kết quả tìm kiếm
                                    </li>
                                ) : (
                                    searchResults.map((searchResults) => (
                                        <li className="h-12 mb-1.5 hover:bg-red-200 rounded-xl" key={searchResults._id}>
                                            <Link
                                                to={`/phim/${searchResults.slug}`}
                                                className="ml-2 h-full flex items-center p-0.5"
                                            >
                                                <img src={searchResults.img_p} alt="" className="h-full rounded-sm" />
                                                <p className="ml-4 text-[#8B008B] font-semibold">
                                                    {searchResults.name}
                                                </p>
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            >
                <div className="flex h-10 ">
                    <div className="flex-1 flex relative">
                        <input
                            type="text"
                            ref={searchInputElement}
                            className="w-full rounded-l-3xl px-5"
                            placeholder={placeholder || 'Bạn muốn tìm phim gì ?'}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />

                        {searchValue && (
                            <CloseOutlined
                                onClick={() => {
                                    setSearchValue('');
                                    setSearchResults([]);
                                    searchInputElement.current.focus();
                                }}
                                className="absolute right-3 top-2/4 translate-y-[-50%] cursor-pointer"
                            />
                        )}
                    </div>
                    <button
                        className={`h-full w-24 md:w-[130px] lg:w-[160px] bg-[#3898ec] text-white font-semibold rounded-r-3xl`}
                    >
                        Tìm kiếm
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

SearchInput.propTypes = {
    width: PropTypes.number,
    placeholder: PropTypes.string,
};

export default SearchInput;
