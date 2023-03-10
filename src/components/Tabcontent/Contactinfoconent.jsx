import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./Contactinfoconent.css";
import Disclosurebutton from "../Button/Disclosurebutton";
import Personalinfocontent from "../DisclosureContent/Personalinfocontent";
import Socialcontent from "../DisclosureContent/Socialcontent";
import Linkscontent from "../DisclosureContent/Linkscontent";
import { useEffect } from "react";
import { addCardsData } from "../../controller/Cards";
import { useNavigate } from "react-router";

const Contactinfoconent = ({card,setCard,id,
  coverImage,setCoverImg,
  profileImage,
  setProfileImage,
  setSocialQuickAccess,
  socialQuickAccess,
  theme1Icons
}) => {
  const [openState, setOpenState] = useState([false, false, false]);

  const [personalContent, setPersonalContent] = useState({
 
  });

  const handleFormChange = (event) => {
    event.preventDefault();
    setPersonalContent({
      ...personalContent,
      [event.target.name]: event.target.value,
    });
  };

  // Links

  const [links, setLinks] = useState([{ tile: "", url: "", icon: "" }]);

  // Social contnent
  const [iconIndex, setIconIndex] = useState([]);

  const navigate = useNavigate();


  const handleClick = async (event) => {
    event.preventDefault();
    console.log("Card: ", card, " id: ", id.id);
    console.log(iconIndex);
    await addCardsData(card,id.id.toString());
    window.location.href = "/";

  };

  return (
    <div className="flex flex-col p-4">
      <div className="my-4">
        <Disclosurebutton
          text="Personal/Business info"
          isOpen={openState[0]}
          component={
            <Personalinfocontent
              personalContent={personalContent}
              setPersonalContent={setPersonalContent}
              handleFormChange={handleFormChange}
              card={card}
              setCard={setCard}
              coverImage={coverImage}
              setCoverImg={setCoverImg}
  
              profileImage ={profileImage}
              setProfileImage={setProfileImage}
            />
          }
        />
      </div>
      <div className="my-4">
        <Disclosurebutton
          text="Social Quick accces"
          isOpen={openState[1]}
          component={
            <Socialcontent iconIndex={iconIndex} setIconIndex={setIconIndex}
            card={card}
            setCard={setCard}
       
            setSocialQuickAccess={setSocialQuickAccess}

            socialQuickAccess ={socialQuickAccess}
            theme1Icons ={theme1Icons}
            />
          }
        />
      </div>

      <div className="my-4">
        <Disclosurebutton
          text="Links "
          isOpen={openState[2]}
          component={<Linkscontent links={links} setLinks={setLinks} 
            card={card}  setCard ={setCard}
          />}
        />
      </div>

      <div className="flex justify-center w-full sm:w-2/3 mb-10">
        <button
          className="text-white  sm:font-medium sm:text-lg w-full bg-[#8C30F5] hover:bg-[#8C30F5]-800 focus:outline-none focus:ring-4 focus:ring-purple-300  rounded-full  px-5 py-2 sm:py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-[#8C30F5] dark:focus:ring-purple-900 w-fit"
          onClick={handleClick}
        >
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};

// const Contactinfoconent = () => {
//   return (<div
//     className="contact-info-container ml-10 pt-5">
//       <div className="personal-info-btn">
//       <button className="btn px-2">Personal/Business info  </button>
//       <AiOutlinePlus />
//       </div>

//   </div>)

export default Contactinfoconent;
