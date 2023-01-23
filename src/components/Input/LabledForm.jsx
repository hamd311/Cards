import React from "react";

const LabledForm = (props) => {
  return (
    <div className="w-full">
      <label
        for="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {props.label}
      </label>
      <textarea
        id={props.id}
        name={props.name}
        value={props.value}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default LabledForm;
