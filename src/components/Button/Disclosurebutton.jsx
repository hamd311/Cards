import React, { useState } from "react";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";

const Disclosurebutton = (props = { isOpen: true, component: <></> }) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [buttonIcon, setButtonIcon] = useState(isOpen ? minus : plus);
 let Component =props.component;
    console.log("props.component",props);
  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      setButtonIcon(plus);
    } else {
      setIsOpen(true);
      setButtonIcon(minus);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className={`text-white font-bold lg:text-[22px] text-[14px] bg-[#8C30F5] hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-bold lg:rounded-full lg:border lg:border-black rounded-xl text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 lg:w-5/12  w-full`}
      >
        <div className="flex justify-between w-full items-center">
          <span className="mx-4 ">{props.text}</span>
          <img src={buttonIcon} alt="toggle" />
        </div>
      </button>
     

      <div className={`${isOpen ? "block" : "hidden"}`}>{props.component}</div>
    </div>
  );
};

export default Disclosurebutton;
