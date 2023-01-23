import React from "react";

const Button = (props = { outline: false, style: "" }) => {
  let buttonProperties = ` text-white font-extrabold  w-full bg-[#8C30F5]  hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium lg:rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 lg:border lg:border-black ${
    props.style
  } ${props.smRoundedFull ? "rounded-full" : "rounded-lg"}`;
  const outlineButton = `text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 `;
  if (props.text === "Delete Account") {
    buttonProperties = buttonProperties + " bg-rose-600";
  }

  const extraSmall = "py-2 px-3 text-xs  ";

  return (
    <button
      className={
        props.outline
          ? props.sm
            ? `${outlineButton} ${extraSmall}`
            : outlineButton
          : buttonProperties
      }
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

export default Button;
