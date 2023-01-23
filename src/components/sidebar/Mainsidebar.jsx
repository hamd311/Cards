import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import card from "../../assets/icons/card.svg";
import users from "../../assets/icons/users.svg";
import Navitem from "./Navitem";
import { useNavigate } from "react-router-dom";

const Mainsidebar = (props) => {
  let cardActive = false;
  let userActive = false;

  const [navListStatus, setNavListStatus] = useState(false);
  const [style, setStyle] = useState("hidden");

  if (props.active === 1) {
    cardActive = true;
  } else if (props.active === 2) {
    userActive = true;
  }

  const toggleNavList = () => {
    if (navListStatus) {
      setNavListStatus(false);
      setStyle("transition-transform	 duration-300 ease-in hidden");
    } else {
      setNavListStatus(true);
      setStyle(" transition	 duration-300 ease-in");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="bg-black p-8 w-full h-full  flex flex-col ">
      <div className="flex justify-around lg:justify-none w-full">
        <img
          src={logo}
          alt="logo"
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <ul className={`text-white mt-10 lg:block  w-full`}>
        <li className="my-5 ">
          <Navitem text="Cards" icon={card} link={"/"} active={cardActive} />
        </li>

        <li className="my-5 ">
          <Navitem
            text="My Account"
            icon={users}
            link={"/account"}
            active={userActive}
          />
        </li>
      </ul>
    </div>
  );
};

export default Mainsidebar;
