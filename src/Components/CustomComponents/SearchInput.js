import React from 'react'
import propTypes from 'prop-types'

const SearchInput=(props)=>(
    <input
    className={props.styleCSS} 
    type="search" 
    value={props.content}
    placeholder={props.placeholder} 
    onChange={props.controlFunc}
    aria-label="Search">
    </input>
    
);

SearchInput.propTypes={
    className:propTypes.string,
    placeholder:propTypes.string.isRequired,
    controlFunc:propTypes.func.isRequired,
    content:propTypes.oneOfType(['number','text']).isRequired
}


export default SearchInput;