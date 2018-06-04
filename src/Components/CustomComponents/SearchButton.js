import  React from 'react'
import propTypes from 'prop-types'


 const SearchButton=(props)=>(
    <buttton 
    className={props.styleCss}
    type={props.type}
    name={props.name}
    >
    {props.title}
    </buttton> 
);

    SearchButton.propTypes={
        className:propTypes.string,
        type:propTypes.oneOf(['submit']),
        name:propTypes.string.isRequired,
        title:propTypes.string.isRequired,

    }
export default SearchButton;