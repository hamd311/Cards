import React, { useState } from "react";
import mobileImg1 from "../../assets/mobile1.svg"
import mobileImg2 from "../../assets/mobile2.svg"
const Themescontent = (props) => {
    const {setCard,card}  =props;
  const [themeImage, setThemeImage] = useState(["./images/viewcard-1.png"]);
  return (
    <div className="py-2">
      <div className="flex w-4/5 mx-auto  w-full">
        <div className="flex justify-center itmes-center lg:justify-start ">
          {/* Looping through the themes */}
     
          {/* <img src={themeImage[0]} alt="card" className="w-[50%] hidden sm:block" /> */}
          <div className="flex gap-5">
          <img src={mobileImg1} alt="card" className=" cursor-pointer" 
            onClick={()=>{
              setCard(
                {
                  ...card,
                  theme:1
                }
              )
            }}
          />
          <img src={mobileImg2} alt="card" className="  cursor-pointer" 
            onClick={()=>{
              setCard(
                {
                  ...card,
                  theme:2
                }
              )
            }}
          />
          </div>

          {/* {themeImage.map((image, index) => {
            return (
              <picture>
                
                <img key={index} src={image} alt="card" className="w-[30%]" />
              </picture>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Themescontent;
