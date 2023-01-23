import React from "react";

const Card = (props) => {
  return (
    <div
      className={`my-4 cursor-pointer  ${props.customize}`}
      onClick={props.onClick}
    >
      <img src={props.image} alt={`Card `} />
    </div>
  );
};

export default Card;
