import  React from 'react'
import propTypes from 'prop-types'


 const SearchButton=(props)=>(
    <button 
    className={props.styleCss}
    type={props.type}
    name={props.name}
    value="Submit"
    >
    {props.title}
    </button> 
);

    SearchButton.propTypes={
        className:propTypes.string,
        type:propTypes.oneOf(['submit']),
        name:propTypes.string.isRequired,
        title:propTypes.string.isRequired,

    }
export default SearchButton;