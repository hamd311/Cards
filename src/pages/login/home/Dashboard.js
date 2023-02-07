import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Mainsidebar from "../../../components/sidebar/Mainsidebar";
import Dashboardcontent from "../../../components/Tabcontent/Dashboardcontent";
import Membercontent from "../../../components/Tabcontent/Membercontent";
import Tab from "../../../components/Tab/Tab";
import cardData from "../../../Data/cardData.json";
import DashboardSideBar from "../../../components/sidebar/DashboardSideBar";

const Dashboard = () => {
  const [headerText, setHeaderText] = useState("Hugo c1");
const [id,setId] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    const id = Number(query.get("id"));
    setId(query.get("id"));
    setHeaderText("");
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex w-screen h-screen  sm:flex-row flex-col font-inter">
      <div
        className={`lg:w-[17%]   h-full sm:block   sm:static fixed w-1/2 top-0 left-0 max-h-max  ${
          isMenuOpen ? "block" : "hidden"
        }`}
        style={{
          zIndex:"10"
      }}
      >
        {/* <Mainsidebar active={1} /> */}
          <DashboardSideBar active={1} />
      </div>

      <div className="lg:w-[85%] w-full  flex flex-col"
   
      >
        <div className="w-full ">
          <Header heading={`Cards/${id.slice(0,5)}...`} openMenu={openMenu} />
        </div>
        <div className="w-full h-full overflow-y-auto" onClick={closeMenu}
           
        >
          <Tab
            tabs={["Dashboard", "Members"]}
            tabcontent={[
              <Dashboardcontent 
              cardId = {id}
              />,
              // <Editcardcontent />,
              <Membercontent />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
