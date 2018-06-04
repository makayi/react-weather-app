import React, {Component} from 'react';
function NumberList(props){

  const numbers=props.numbers;
  const listItems=numbers.map((number,index)=>
    <li key={index} className="list-group-item">{number}</li>
);
   return (
      <ul className="list-group">{listItems} </ul>
   )
}

export default NumberList;

  


