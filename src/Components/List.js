import React, {Component} from 'react';
function NumberList(props){

  const numbers=props.numbers;
  const listItems=numbers.map((number)=>
    <li className="list-group-item">{number}</li>
);
   return (
      <ul className="list-group">{listItems} </ul>
   )
}

export default NumberList;

  


