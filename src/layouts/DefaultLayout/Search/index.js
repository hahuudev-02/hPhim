import React from 'react'
import PropTypes from 'prop-types'

function Search(props) {
  return (
    <div className="h-10 flex px-10">
      <input type="text" className="flex-1 rounded-l-md pl-2" placeholder="Bạn muốn tìm phim gì ?" />
      <button className="h-full w-40 bg-[#3898ec] text-white font-semibold rounded-r-md">Tìm kiếm</button>
        </div>
  )
}

Search.propTypes = {}

export default Search
