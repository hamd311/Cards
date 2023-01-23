import React from "react";
import Button from "../Button/Button";

import menuIcon from "../../assets/icons/menu.svg";
import Logout from "../logout/Logout";

const Header = (props) => {
  const handelLogout = () => {
    // <Logout   />
  };

  return (
    <div className="flex justify-between items-center sm:px-8 px-4    w-full h-full border-b border-black py-8 bg-black sm:bg-white text-white lg:text-black">
      <span className="cursor-pointer sm:hidden " onClick={props.openMenu}>
        <img src={menuIcon} alt="menu" />
      </span>
      <span className="font-bold text-[1.25rem] lg:text-[2.5rem]">
        {props.heading}
      </span>
      <div className="max-w-4/12 lg:w-1/12 sm:w-3/12 min-w-fit font-inter ">
        <Button
          text="Logout"
          style="sm:px-12 px-4  text-[12px] lg:text-[32px] lg:py-4 py-2 font-[900] rounded-full"
          onClick={handelLogout}
          data-modal-toggle="popup-modal"
          smRoundedFull={true}
        />
      </div>
    </div>
  );
};

export default Header;
