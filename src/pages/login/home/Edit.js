import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Mainsidebar from "../../../components/sidebar/Mainsidebar";
import Editcardcontent from "../../../components/Tabcontent/Editcardcontent";
import cardData from "../../../Data/cardData.json";

const Edit = (props) => {
  const [headerText, setHeaderText] = useState("Hugo c1");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    const id = Number(query.get("id"));

    setHeaderText(`${cardData[id].firstName} ${cardData[id].cardNumber}`);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-screen h-screen  flex font-inter">
      <div
        className={`lg:w-[17%]   h-full sm:block   sm:static z-100 fixed w-1/2 top-0 left-0 max-h-max  ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Mainsidebar active={1} />
      </div>
      <div className="lg:w-[85%] w-full  flex flex-col">
        <div className="w-full ">
          <Header heading={`Cards/${headerText}`} openMenu={openMenu} />
        </div>
        <div className="w-full h-full overflow-y-auto" onClick={closeMenu}>
          <Editcardcontent />
        </div>
      </div>
    </div>
  );
};

export default Edit;
