import React from "react";
import Viewcard from "../Cards/Viewcard";
import Tab from "../Tab/Tab";
import Appeareancecontent from "./Appeareancecontent";
import Contactinfoconent from "./Contactinfoconent";
import Contentcontent from "./Contentcontent";
import eyeicon from "../../assets/icons/eye.svg";
import { useState } from "react";

const Editcardcontent = () => {
    const[card,setCard] = useState({
          theme:1,
          bgColor:"#000000",
          fontColor:"#ffffff",   
          coverImage: "",
          profileImage: "",
          name: "",
          tile: "",
          busniessName: "",
          phoneNumber: "",
          email: "",
          homePage: "",
          socialQuickAccess:[],
          links:[{ tile: "", url: "", icon: "" }],
          article:{
            title:"",
            content:""
          },
          services:[{ tile: "", details: "" }],
          gallary:{
            name:"",
            video:"",
            images:[],
          }
          
        });
        console.log(card)
    
  return (
    <div className="flex h-full w-full flex-col lg:flex-row">
      <button
        className="py-2 left-[33%] bottom-[2%] mx-auto my-auto px-4 fixed sm:hidden  rounded-full border text-sm font-bold text-black bg-[#E1E1E1] opacity-none flex justify-center items-center"
        onClick={() => {
          window.location.href = "/view";
        }}
      >
        <span>
          <img src={eyeicon} alt="preview" />
        </span>
        <span className="ml-4">preview</span>
      </button>

      <div className="lg:w-5/6 w-full h-fit min-h-full lg:border-r border-black">
        <Tab
          tabs={["Appeareance", "Contact info", "Content"]}
          tabcontent={[
            <Appeareancecontent 
            card={card}
            setCard={setCard}
            />,
            <Contactinfoconent 
            card={card}
            setCard={setCard}
            />,
            <Contentcontent 
            card={card}
            setCard={setCard}
            />,
          ]}
          activeStyle={"lg:text-[25px] text-[18px]"}
          inactiveStyle={"lg:text-[22px] text-[16px]"}
        />
      </div>
      <div className="lg:w-2/6 w-full h-full hidden sm:block ">
        <Viewcard 
             card={card}
             setCard={setCard}
        />
      </div>
    </div>
  );
};

export default Editcardcontent;
