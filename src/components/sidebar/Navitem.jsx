import React from "react";
import { NavLink } from "react-router-dom";

const Navitem = (props) => {
  return (
    <NavLink to={props.link}>
      <div
        className={`flex items-center ${
          props.active ? "border-b-2 py-2 border-white" : ""
        }`}
      >
        <img src={props.icon} alt="Nav item" className="w-10" />{" "}
        <span className="mx-2"> {props.text}</span>
      </div>
    </NavLink>
  );
};

export default Navitem;
