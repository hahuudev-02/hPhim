import React, { memo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

function Paging( ) {
    const [page, setPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    const amoutMovie = useSelector((state) => state.movies.getAmountMovie);

    let arrPaging = [1];
    for (let i = 0; i <= amoutMovie; i++) {
        // console.log('hii');
        if ((i / 2 > 1) & (i > 1)) {
            arrPaging.push(i);
        }
    }

    // console.log(arrPaging);
    const handlePage = () => {
        if (page > 1) setPage(page - 1);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    useEffect(() => {
        setSearchParams({page: page})
    }, [page]);

    console.log(page);

    return (
        <div className="w-full h-14 flex-center">
            <ul className="max-w-[400px] flex space-x-2">
                <li
                    className={`flex-center w-8 text-white p-2 rounded-md hover:border cursor-pointer ${
                        page == 1 ? 'disable-page' : null
                    }`}
                    onClick={handlePage}
                >
                    <DoubleLeftOutlined className="mt-0.5" />
                </li>

                {arrPaging?.map((item, index) => {
                    return (
                        <li
                            className={`flex-center min-w-[32px] text-white p-2 rounded-md hover:border cursor-pointer ${
                                page == index + 1 && 'bg-red-500'
                            }`}
                            key={`${index}-page`}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </li>
                    );
                })}

                <li
                    className={`flex-center w-8 text-white p-2 rounded-md hover:border cursor-pointer  ${
                        page == arrPaging.length ? 'disable-page' : null
                    }`}
                    onClick={() => (page == arrPaging.length ? null : setPage(page + 1))}
                >
                    <DoubleRightOutlined className="mt-0.5" />
                </li>
            </ul>
        </div>
    );
}

Paging.propTypes = {};

export default memo(Paging);
