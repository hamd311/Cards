import React from "react";
import binIcon from "../../assets/icons/bin.svg";
const ContactInfoElement = ({ Icon, label, color, index, handelDelete,onChange}) => {
  return (
    <div className="flex lg:items-center lg:ml-10 mt-3">
      <div
        className={`lg:p-3  sm:rounded-full w-[10%] flex justify-center items-center`}
      >
        <img src={Icon} className=" w-full h-full " alt="Social link" />
      </div>

      <input
        className="
        w-4/5        
        bg-white
        appearance-none border-2 border-black-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500
        mx-3
        italic
        font-Inter
     "
        id="inline-full-name"
        type="text"
        placeholder={label}

        onChange={onChange}
      />

      <div className="w-[6%] flex sm:w-[10%] sm:block">
        <img
          src={binIcon}
          alt="Delete"
          className="cursor-pointer"
          onClick={() => handelDelete(index)}
        />
      </div>
    </div>
  );
};

export default ContactInfoElement;
