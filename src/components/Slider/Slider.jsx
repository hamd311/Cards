import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import leftArrowIcon from "../../assets/icons/leftarrow.svg";
import RightArrowIcon from "../../assets/icons/rightarrow.svg";

const Slider = (props) => {
  const [currentReview, setCurrentReview] = useState();
  const [index, setIndex] = useState(0);

  const handelNextReview = () => {
    setIndex(index + 1);
    if (props.reviews) setCurrentReview(props.reviews[index]);
  };

  useEffect(() => {
    if (props.reviews) setCurrentReview(props.reviews[index]);
  }, []);
  return (
    <div className="w-[95%] mx-auto">
      <div className="w-full bg-inherit flex items-center  py-8  ">
        <div className="w-fit flex items-center">
          <img
            src={leftArrowIcon}
            alt="slide to left"
            className="cursor-pointer w-[48px] h-[48px]"
          />
        </div>

        <div className="w-full text-center text-white sm:px-20 px-6 py-20 font-bold">
          " I've been here twice before and have had a very pleasant experience
          both times. The staff here is very friendly and professional. They do
          a great job with kids photoshoots. I definitely would come here again.
          "
        </div>
        <div className="w-fit flex items-center">
          <img
            src={RightArrowIcon}
            alt="slide to right"
            className="cursor-pointer w-[48px] h-[48px]"
          />
        </div>
      </div>

      <div className="text-center text-white font-bold">{"-Sheila G."}</div>
    </div>
  );
};

export default Slider;
