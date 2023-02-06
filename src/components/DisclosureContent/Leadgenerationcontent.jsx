import React from "react";
import Button from "../Button/Button";
import Inputgroup from "../Input/Inputgroup";

const Leadgenerationcontent = ({card,setCard}) => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto">
        <div className="my-4">
          <label
            for="green-toggle"
            className="inline-flex relative items-center mr-5 cursor-pointer"
          >
            <input
              type="checkbox"
              value={card?.leadGeneration?.isTrue}
              id="green-toggle"
              className="sr-only peer"
              onChange={(e)=>{
                let temp =card?.leadGeneration;
                temp.isTrue= !e.target.value;
                 setCard({
                  ...card,
                  leadGeneration:temp
                 })
              }}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Lead Generation system
            </span>
          </label>
        </div>

        <div>
          <Inputgroup
            label={"Label Tile"}
            placeholder={"Contact Us"}
            type={"text"}
            value={card?.leadGeneration?.leadGeneration}

            onChange={(e)=>{
                let temp =card?.leadGeneration;
                temp.leadGeneration =e.target.value;

                setCard({
                  ...card,
                  leadGeneration:temp
                })
              }
            }
          />
        </div>

        <div className="w-3/12 my-8 mx-auto">
          <Button text={"Done"} outline={true} />
        </div>
      </div>
    </div>
  );
};

export default Leadgenerationcontent;
