import React, { memo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import ReactPaginate from 'react-paginate';

function Paging({ currentItems }) {
    const pageCount = Math.ceil(useSelector((state) => state.movies?.getAmountMovie) / currentItems);
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage =
        searchParams.get('page') > pageCount || searchParams.get('page') < 1 ? 0 : searchParams.get('page') - 1;

    useEffect(() => {
        if (searchParams.get('page') == 1) {
            setSearchParams({ page: '1' });
        }

        if (searchParams.get('page') < 1 || searchParams.get('page') > pageCount) {
            setSearchParams({ page: '1' });
        }
    }, []);

    const handlePageChange = (e) => {
        const page = e.selected + 1;
        if (page > 0) {
            setSearchParams({ page: `${page}` });
        }
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel={<DoubleRightOutlined className="mb-2 ml-2" />}
            onPageChange={handlePageChange}
            pageRangeDisplayed={5}
            initialPage={initialPage}
            disableInitialCallback={true}
            pageCount={pageCount}
            previousLabel={<DoubleLeftOutlined className="mb-2 mr-2" />}
            renderOnZeroPageCount={null}
            containerClassName="flex space-x-4"
            pageClassName="text-white"
            pageLinkClassName="border border-transparent hover:border-yellow p-2 cursor-pointer"
            activeLinkClassName="text-red-500 border-yellow cursor-default"
            disabledLinkClassName="text-[#786666] cursor-default"
            breakClassName="text-white"
            previousClassName="text-xl text-white flex-center"
            nextClassName="text-xl text-white flex-center"
        />
    );
}

Paging.propTypes = {};

export default memo(Paging);
