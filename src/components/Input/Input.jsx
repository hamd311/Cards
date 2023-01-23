import React from "react";

const Input = (
  props = { type: "text", id: "input", name: "input", placeholder: "" }
) => {
  return (
    <input
      type={props.type}
      id={props.id}
      name={props.name}
      value={props.value}
      className="bg-gray-50 border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  font-bold text-black italic"
      placeholder={props.placeholder}
      onChange={props.onChange}
      required
    />
  );
};

export default Input;
