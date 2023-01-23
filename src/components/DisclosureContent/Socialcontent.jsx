import React, { useState } from "react";
import ContactInfoElement from "../ContactInfo/ContactInfoElement";

import "./Socialcontent.css";
import emailIcon from "../../assets/socialIcons/email.svg";
import facebookIcon from "../../assets/socialIcons/facebook.svg";
import whatsappIcon from "../../assets/socialIcons/whatsapp.svg";
import phoneIcon from "../../assets/socialIcons/phone.svg";
import twitterIcon from "../../assets/socialIcons/twitter.svg";
import linkedinIcon from "../../assets/socialIcons/linkedin.svg";
import tiktokIcon from "../../assets/socialIcons/tiktok.svg";
import paypalIcon from "../../assets/socialIcons/paypal.svg";
import instagramIcon from "../../assets/socialIcons/Instagram.svg";
import youtubeIcon from "../../assets/socialIcons/youtube.svg";
import Canlendly from "../../assets/socialIcons/Canlendly.svg";
import Spotify from "../../assets/socialIcons/Spotify.svg";
import Music from "../../assets/socialIcons/music.svg";
import Pinterest from "../../assets/socialIcons/Pinterest.svg";
import Messenger from "../../assets/socialIcons/messanger.svg";
import Vimeo from "../../assets/socialIcons/Vimeo.svg";
import Yelp from "../../assets/socialIcons/yelp.svg";
import Telegram from "../../assets/socialIcons/Telegram.svg";
import Snapchat from "../../assets/socialIcons/Snapchat.svg";
import Skype from "../../assets/socialIcons/skype.svg";
import Iconboard from "../Iconboard/Iconboard";
const Socialcontent = (props) => {
  const icons = [
    { icon: emailIcon, name: "Email", color: "#2566B3" },
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
  const [display, setDiaplay] = useState("z-[100]");
  const [showModal, setShowModal] = useState(false);

  const handelAddClick = () => {
    setShowModal(true);
  };

  const handelDelete = (index) => {
    const oldeData = [...props.iconIndex];
    oldeData.splice(index, 1);

    props.setIconIndex([...oldeData]);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        {props.iconIndex.map((item, index) => {
          return (
            <ContactInfoElement
              key={index}
              Icon={icons[item].icon}
              label={icons[item].name}
              color={icons[index].color}
              handelDelete={handelDelete}
            />
          );
        })}

        {showModal && (
          <Iconboard
            display={display}
            iconIndex={props.iconIndex}
            setIconIndex={props.setIconIndex}
            setShowModal={setShowModal}
          />
        )}

        <div className="flex justify-center mt-4">
          <button
            className="add-icon-btn
                py-1
                px-4
               rounded-full
              "
            data-modal-toggle="social-icon-modal"
            onClick={handelAddClick}
          >
            Add Icon
          </button>
        </div>
      </div>
    </>
  );
};

export default Socialcontent;
