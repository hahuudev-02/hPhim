import React from 'react'

function FooterItem(props) {
  return (
    <div className="flex ">
        <h4 className="text-dark-gray text-base whitespace-nowrap">{props.title}</h4>
        <a href={props.link} target="_blank" rel="noreferrer" className="ml-2 text-dark-green text-base">{props.content}</a>
    </div>
  )
}

export default FooterItem
