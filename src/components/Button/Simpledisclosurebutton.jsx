import React from "react";

const Simpledisclosurebutton = (props) => {
  return (
    <div className="p-4">
      <details className="text-white">
        <summary className="cursor-pointer">{props.summary}</summary>

        <div className="w-11/12 ml-auto p-2 ">{props.details}</div>
      </details>
    </div>
  );
};

export default Simpledisclosurebutton;
