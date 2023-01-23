import React from "react";
import Button from "../../../components/Button/Button";
import Simpledisclosurebutton from "../../../components/Button/Simpledisclosurebutton";
import logo from "../../../assets/images/logo.svg";

import Slider from "../../../components/Slider/Slider";
import coverImage from "../../../assets/images/coverImage.svg";

// // Icons
import emailIcon from "../../../assets/icons/email.svg";
import emailIcon1 from "../../../assets/icons/newMailSvg.svg";
import facebookIcon from "../../../assets/cardList/facebook.svg";
import phoneIcon from "../../../assets/cardList/phone.svg";
import twitterIcon from "../../../assets/cardList/twitter.svg";
import linkedinIcon from "../../../assets/cardList/linkedin.svg";
import tiktokIcon from "../../../assets/cardList/tiktok.svg";
import paypalIcon from "../../../assets/cardList/paypal.svg";
// import paypalIcon from "../../../assets/cardList/paypal.svg";

// import paypalIcon from "../../../assets/cardList/paypal.svg";
import instagramIcon from "../../../assets/cardList/Instagram.svg";
import "./cardview.css";

const icons = [
  { icon: phoneIcon, name: "Phone" },
  { icon: emailIcon1, name: "Email" },
  { icon: linkedinIcon, name: "LinkedIn" },
  { icon: paypalIcon, name: "Paypal" },
  { icon: tiktokIcon, name: "TikTok" },
  { icon: twitterIcon, name: "Twitter" },
  { icon: instagramIcon, name: "Instagram" },
  { icon: facebookIcon, name: "Facebook" },
];

// End Icons
const cardInfo = {
  personalInfo: {
    name: "hugo Glaindo",
    titlePosition: "Account Manager",
    busniessName: "Nunez Office installiation",
    phoneNumber: "7476090334",
    email: "Hugo@teamnoi.com",
    homePage: "www.Mydatacard.com/noi/c3",
    coverImage: coverImage,
    profileImage: "./images/profilePicture.svg",
  },
  socialQuickAccess: icons,
  About: {
    tile: "About us",
    discription: `NOI is a fully stacked company that
                  provides office furniture dealers
                  with storage, delivery and installation
                  services.
                  Our main focus is to represent office 
                  furniture dealers with exceptional
                  quality service on every project.

                  We have an outstanding reputation
                  thanks to theexpertise and values
                  of our management and installers
                  who are knowledgeable on every
                  system that is in today's market`,
  },

  gallary: {
    videoUrl: "",
    images: [
      "./images/gallary-1.svg",
      "./images/gallary-2.svg",
      "./images/gallary-3.svg",
      "./images/gallary-4.svg",
      "./images/gallary-5.svg",
      "./images/gallary-6.svg",
      "./images/gallary-7.svg",
      "./images/gallary-8.svg",
      "./images/gallary-9.svg",
    ],
  },

  reviews: [
    {
      review: `I've been here twice before and have had a very pleasant experience both times. The staff here is very friendly and professional. `,
      reviewBy: "-Sheila G.",
    },
  ],
};

const Cardview = () => {
  return (
    <div className="w-screen  bg-black  font-inter ">
      <div className="">
        <div className="w-full">
          <img
            src={cardInfo.personalInfo.coverImage}
            alt={"cover"}
            className={`w-full `}
            loading="lazy"
          />
        </div>
        <div className="flex w-full justify-center align-center mt-[-4rem] sm:mt-[-8rem]  ">
          <img
            src={cardInfo.personalInfo.profileImage}
            alt="profile"
            className="w-[140px] h-[140px] sm:w-fit sm:h-fit "
            loading="lazy"
          />
        </div>
        <div className="sm:border sm:border-dashed sm:border-[#FF0A0A] w-4/5 mx-auto my-2 p-6 ">
          <div className="text-center font-semibold  text-xl my-2 text-white">
            {cardInfo.personalInfo.name}
          </div>
          <div className="text-center   text-lg my-2 text-white">
            {cardInfo.personalInfo.titlePosition}
          </div>
          <div className="text-center   text-xl my-2 text-white">
            {cardInfo.personalInfo.busniessName}
          </div>

          <div className="grid sm:grid-cols-6 lg:grid-cols-8 grid-cols-4 justify-center gap-5 sm:gap-8 my-6">
            {cardInfo.socialQuickAccess.map((icon, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-center text-sm"
                  key={index}
                >
                  <img
                    src={icon.icon}
                    alt={`${icon.name} icon`}
                    // className={"sm:w-[72px] sm:h-[72px] w-[24px] h-[24px]"}
                    // className={"  "}

                    loading="lazy"
                  />

                  <span className="text-white text-center mt-2 text-xs sm:text-lg">
                    {icon.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-fit mx-auto">
            <Button text="Save to Contacts" />
          </div>
        </div>
        <div className="w-full sm:w-9/12 w-4/5 mx-auto my-6 mx-auto rounded-full border border-white  flex items-center ">
          <img
            src={cardInfo.personalInfo.profileImage}
            className=" h-[36px] rounded-full mr-10"
            loading="lazy"
          />

          <div className="text-white text-lg">Our Website</div>
        </div>
        <div className="sm:border sm:border-dashed sm:border-[#FF0A0A] w-4/5 mx-auto text-center p-4">
          <p className="text-center font-bold text-white text-[34px] ">
            About Us
          </p>
          <p className="text-center  text-white my-4">
            AX Photo Studio provides a variety of Professional Photography
            services for both retail customers and Professional clients around
            the Southern California Area.
          </p>

          <p className="text-center  text-white my-4">
            We specialize in Portraits, Weddings, Quinceaneras, and Special
            Events photography.
          </p>

          <p className="text-center  text-white my-4">
            We offer a full line of professional lab services for Professional
            Photographers and businesses.
          </p>
        </div>
        {/* Section Our Services */}
        <div className="border-2 border-[#8C30F5] sm:w-3/5 w-9/12 mx-auto my-6">
          <div className="w-full border-b-2   border-[#8C30F5]">
            <Simpledisclosurebutton
              summary={"Our services"}
              details={`Sunday Closed
                    Monday 8:00 am–4:00 pm
                    Tuesday 8:00 am–4:00 pm
                    Wednesday 8:00 am 4:00pm
                    Thursday 8:00 am–4:00 pm
                    Friday 8:00 am–4:00 pm
                    Saturday Closed`}
            />
          </div>

          <div>
            <Simpledisclosurebutton
              summary={"Opening hours"}
              details={`Sunday Closed
                    Monday 8:00 am–4:00 pm
                    Tuesday 8:00 am–4:00 pm
                    Wednesday 8:00 am 4:00pm
                    Thursday 8:00 am–4:00 pm
                    Friday 8:00 am–4:00 pm
                    Saturday Closed`}
            />
          </div>
        </div>
        {/* Our Work Gallary  */}
        <div className="sm:w-4/5 w-full  mx-4 sm:mx-auto sm:border sm:border-dashed sm:border-[#FF0A0A] sm:px-20 px-4">
          <h3 className="text-center font-bold text-[30px] text-white my-4">
            Our Work
          </h3>
          <div className="grid grid-cols-3 gap-2 p-2">
            {/* Video  */}
            <div className="col-span-3 row-span-3 w-full h-full">
              <video className="w-full h-full  " controls>
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="Video/mp4"
                  loading="lazy"
                ></source>
              </video>
            </div>

            <div>
              <img
                src={cardInfo.gallary.images[0]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[1]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[2]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div className="col-span-2 row-span-2">
              <img
                src={cardInfo.gallary.images[3]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[4]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[5]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[6]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[7]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
            <div>
              <img
                src={cardInfo.gallary.images[8]}
                alt={"Gallary "}
                className={"w-full h-full"}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* Client Review */}
        <div className="w-full sm:w-4/5 w-full mx-auto my-6">
          <h3 className="text-white text-[30px] font-bold text-center">
            Client Review
          </h3>

          <div className="sm:w-3/5 w-full  mx-auto ">
            <Slider
              reviews={[
                {
                  review: `I've been here twice before and have had a very pleasant experience both times. The staff here is very friendly and professional. `,
                  reviewBy: "-Sheila G.",
                },
              ]}
            />
          </div>
        </div>
        {/* Form */}
        <div className="w-full sm:w-4/5 sm:border sm:border-dashed sm:border-[#FF0A0A] mx-auto p-2 sm:p-6">
          <div className="font-bold text-center text-[30px] text-white">
            Contact Us
          </div>

          <form className="flex flex-col sm:w-1/2 p-4 mx-auto my-6">
            <input
              className="p-4 outline-none focus:outline-none border-none mb-2 rounded"
              placeholder="Name"
            />
            <input
              className="p-4 outline-none focus:outline-none border-none mb-2 rounded"
              placeholder="Phone"
            />
            <input
              className="p-4 outline-none focus:outline-none border-none mb-2 rounded "
              placeholder="Email"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="rounded"
            ></textarea>

            <div className="sm:w-4/12 w-1/2 mx-auto my-4">
              <Button text="Send" />
            </div>
          </form>
        </div>
        {/* Footer */}
        <div className="mt-20">
          <div className="py-20">
            <img
              src={logo}
              alt="Logo "
              className="w-fit mx-auto my-4"
              loading="lazy"
            />
            <div className="text-center text-white">Smart Business Card</div>
            <div className="text-center text-white italic text-[28px]">
              Get yours today
            </div>
          </div>

          <div className="bg-white py-10">
            <div className=" border-b-2 border-black  w-3/12 my-4 mx-auto"></div>
            <div className="text-center font-semibold text-2xl">
              Powered by <span className="underline">My-datacard.com </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardview;
