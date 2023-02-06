import React, { useState } from "react";
import emailIcon from "../../assets/icons/email.svg";
import emailIcon1 from "../../assets/icons/emailBlack.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import tiktokIcon from "../../assets/icons/tiktok.svg";
import paypalIcon from "../../assets/icons/paypal.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import Canlendly from "../../assets/icons/Calendly.svg";
import Spotify from "../../assets/icons/Spotify.svg";
import Music from "../../assets/icons/Music.svg";
import Pinterest from "../../assets/icons/Pinterest.svg";
import Messenger from "../../assets/icons/Messenger.png";
import Vimeo from "../../assets/icons/Vimeo.svg";
import Yelp from "../../assets/icons/Yelp.svg";
import Telegram from "../../assets/icons/Telegram.svg";
import Snapchat from "../../assets/icons/Snapchat.svg";
import Skype from "../../assets/icons/Skype.svg";
import "./Iconboard.css";
const Iconboard = (props) => {
  const { setShowModal,listingIcons,setCard,card} = props;
  const icons = [
    { icon: emailIcon1, name: "Email", color: "#2566B3" },
    { icon: facebookIcon, name: "Facebook", color: "#2566B3" },
    { icon: whatsappIcon, name: "Whatsapp" },
    { icon: phoneIcon, name: "Phone", color: "#2566B3" },
    { icon: twitterIcon, name: "Twitter", color: "#2566B3" },
    { icon: linkedinIcon, name: "Linked", color: "#2566B3" },
    { icon: tiktokIcon, name: "TikTok", color: "#2566B3" },
    { icon: paypalIcon, name: "Paypal", color: "#2566B3" },
    { icon: instagramIcon, name: "Instagram", color: "#2566B3" },
    { icon: youtubeIcon, name: "Youtube", color: "#2566B3" },
    { icon: Canlendly, name: "Canlendly", color: "#2566B3" },
    { icon: Spotify, name: "Spotify", color: "#2566B3" },
    { icon: Music, name: "Music", color: "#2566B3" },
    { icon: Pinterest, name: "Pinterest", color: "#2566B3" },
    { icon: Messenger, name: "Messenger", color: "#2566B3" },
    { icon: Vimeo, name: "Vimeo", color: "#2566B3" },
    { icon: Yelp, name: "Yelp", color: "#2566B3" },
    { icon: Telegram, name: "Telegram", color: "#2566B3" },
    { icon: Snapchat, name: "Snapchat", color: "#2566B3" },
    { icon: Skype, name: "Skype", color: "#2566B3" },
  ];

  const handleClick = (id) => {
    setShowModal(false);
    let temp =   props.iconIndex;

    console.log("temp",temp)
     temp.push(
      {
        index:id
      }
     );
     props.setIconIndex([
      ...temp
     ])

   
    
     temp.push({
         icon:icons[props.iconIndex],
         link:""
     })

     let tempArr = listingIcons[id];
     console.log("tempArr",tempArr)
 
     setCard({
       ...card,
       socialQuickAccess:temp
     })
    // props.setIconIndex((iconIndex) => [{...props.iconIndex, 
    //    index:id}]);
  };
  return (
    <div
      className={`sm:w-[25%] h-[50%] w-[50%]  absolute w-full h-full    overflow-y-scroll  cursor-pointer  right-0 top-0 p-6 bg-black grid grid-cols-5   gap-4  text-blue-100 ${props.display}
         add-social-icon-modal
      `}
    >
      {icons.map((icon, index) => {
        return (
          <div
            className="flex flex-col items-center justify-center text-sm"
            onClick={() => handleClick(index)}
          >
            <img
              src={icon.icon}
              alt={`${icon.name} icon`}
              className={
                "sm:w-[40px] w-[28px] h-[24px] sm:h-[36px] object-contain"
              }
            />
            <span className="text-white text-center sm:text-base text-[8px]">
              {icon.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Iconboard;
