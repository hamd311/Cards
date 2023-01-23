import React, { useState } from "react";

const Tab = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabActive = `inline-block p-4 text-black  rounded-t-lg border-b-2 border-black active dark:text-purple-500 dark:border-purple-500  font-bold ${
    props.activeStyle != undefined
      ? props.activeStyle
      : "lg:text-[30px] text-[18px]"
  }`;

  const handelTabIndexClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
          
      >
        <ul className="flex  -mb-px pt-6"
             style={{
              zIndex:"-100"
            }}
        >
          {props.tabs.map((tab, i) => {
            return (
              <li
                key={i}
                onClick={() => handelTabIndexClick(i)}
                className={`lg:mr-6  cursor-pointer  text-[#767676]`}
              >
                <a
                  className={`${
                    activeIndex === i
                      ? tabActive
                      : `inline-block lg:p-4 py-4 px-2 rounded-t-lg  border-b-2 border-transparent hover:text-gray-600  hover:border-gray-300 dark:hover:text-gray-300   ${
                          props.inactiveStyle != undefined
                            ? props.inactiveStyle
                            : "lg:text-[28px] text-[16px]"
                        }`
                  }`}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full h-full  ">{props.tabcontent[activeIndex]}</div>
    </div>
  );
};

export default Tab;
