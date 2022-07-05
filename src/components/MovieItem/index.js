import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StarOutlined, TagOutlined } from '@ant-design/icons';

function MovieItem({ props }) {
    return (
        <div>
            <Link to={`/phim/${props.slug}`} className="">
                <img src={props.img_p} alt="" className="w-full rounded-lg" />
            </Link>
            <div className="icon space-x-1 my-2">
                <StarOutlined className="text-yellow-600" theme="outlined" />
                <StarOutlined className="text-yellow-600" theme="outlined" />
                <StarOutlined className="text-yellow-600" theme="outlined" />
                <StarOutlined />
                <StarOutlined />
            </div>

            <Link to={`/phim/${props.slug}`} className="text-2xl text-white font-bold">
                {props.name}
            </Link>
            <Link to="/" className="text-white flex items-center mt-2">
                <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                Phim tình cảm
            </Link>
        </div>
    );
}

MovieItem.propTypes = {
    props: PropTypes.object,
};

export default MovieItem;
