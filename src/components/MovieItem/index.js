import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ReactImageFallback from 'react-image-fallback';
import { sortCategory } from '~/utilities';

import { StarOutlined, TagOutlined, PlayCircleOutlined } from '@ant-design/icons';

function MovieItem({ props }) {
    const category = sortCategory(props.genre)
    return (
        <div>
            <Link to={`/phim/${props.slug}`} className="relative rounded-lg overflow-hidden test">
                <PlayCircleOutlined className="icon-play hidden text-white text-3xl absolute z-10 top-[49%] -translate-y-2/4 left-[47%] animate-blur-down" />
                <img src={props.img_p} alt="" className="w-full rounded-lg hover:scale-1009 ease-in duration-200" />
            </Link>
            <div className="icon space-x-1 my-2">
                <StarOutlined className="text-yellow" theme="outlined" />
                <StarOutlined className="text-yellow" theme="outlined" />
                <StarOutlined className="text-yellow" theme="outlined" />
                <StarOutlined />
                <StarOutlined />
            </div>

            <Link to={`/phim/${props.slug}`} className="text-2xl text-white font-bold">
                {props.name}
            </Link>
            <Link to={`/the-loai/${category.slugGenre}`} className="text-white flex items-center mt-2">
                <TagOutlined rotate="270" className="text-[#f1b722] mr-2" />
                {category.genre}
            </Link>
        </div>
    );
}

MovieItem.propTypes = {
    props: PropTypes.object,
};

export default MovieItem;
