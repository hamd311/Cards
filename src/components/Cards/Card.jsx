import React from "react";
import './Card.css';
const Card = (props) => {
  return (
    <div
      className={`my-4 cursor-pointer  ${props.customize} card-class`}
      onClick={props.onClick}
      
    >

      <h1 className="card_id">{props.id} </h1>

      <div className="card-body">
      <img src={props.image} alt={`Card `} className="card-img "/>
      <br></br>
      <h1 className="card_name">{props.name} </h1>
      </div>
    </div>
  );
};

export default Card;
