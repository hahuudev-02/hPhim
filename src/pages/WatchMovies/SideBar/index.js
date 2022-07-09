import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from 'components/SearchInput';

function SideBar(props) {
    return (
        <div className="h-[1000px] overflow-y-scroll">
            <SearchInput width={90} placeholder="Search"/>
        </div>
    );
}

SideBar.propTypes = {};

export default SideBar;
