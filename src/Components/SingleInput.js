import React from 'react';
import PropTypes from 'prop-types';
const SingleInput =(props)=>(
 <div>
     <label>{props.title}</label>
     <input
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.controlFunc}
      placheholder={props.placheholder}
     />
</div>
);
SingleInput.propTypes = {  
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    placeholder: PropTypes.string,
  };
  
  export default SingleInput;  